import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io();


const VoiceCall = () => {
    const [room, setRoom] = useState('');
    const [isCalling, setIsCalling] = useState(false);
    const localAudioRef = useRef(null);
    const remoteAudioRef = useRef(null);
    const peerConnectionRef = useRef(null);
    const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

    useEffect(() => {
        socket.on('offer', handleOffer);
        socket.on('answer', handleAnswer);
        socket.on('ice-candidate', handleIceCandidate);

        return () => {
            socket.off('offer');
            socket.off('answer');
            socket.off('ice-candidate');
        };
    });

    const joinRoom = () => {
        socket.emit('join', room);
        setIsCalling(true);
        peerConnectionRef.current = new RTCPeerConnection(configuration);

        // Get user media
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                localAudioRef.current.srcObject = stream;
                stream.getTracks().forEach(track => {
                    peerConnectionRef.current.addTrack(track, stream);
                });

                peerConnectionRef.current.onicecandidate = (event) => {
                    if (event.candidate) {
                        socket.emit('ice-candidate', { candidate: event.candidate, room });
                    }
                };

                peerConnectionRef.current.ontrack = (event) => {
                    remoteAudioRef.current.srcObject = event.streams[0];
                };
            })
            .catch(err => {
                console.error("Error accessing media devices.", err);
            });
    };

    const startCall = async () => {
        const offer = await peerConnectionRef.current.createOffer();
        await peerConnectionRef.current.setLocalDescription(offer);
        socket.emit('offer', { offer, room });
    };

    const handleOffer = async (data) => {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.offer));
        const answer = await peerConnectionRef.current.createAnswer();
        await peerConnectionRef.current.setLocalDescription(answer);
        socket.emit('answer', { answer, room });
    };

    const handleAnswer = async (data) => {
        await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(data.answer));
    };

    const handleIceCandidate = (data) => {
        peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(data.candidate));
    };

    return (
        <div>
            <h2>Voice Call</h2>
            <input
                type="text"
                placeholder="Room ID"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
            {isCalling && <button onClick={startCall}>Start Call</button>}
            <audio ref={localAudioRef} autoPlay muted />
            <audio ref={remoteAudioRef} autoPlay />
        </div>
    );
};

export default VoiceCall;


