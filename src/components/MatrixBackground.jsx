import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasDimensions();

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
        const fontSize = 16;
        let columns = canvas.width / fontSize;

        let drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            // Usar opacidade com destination-out faz o canvas apagar gentilmente mantendo opacidade 0 ao invés de pichar um rastro de cor
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';

            // Cor das letras inspirada no seu tema (#5a03fc e #a621ff)
            ctx.fillStyle = '#a621ff';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));

                // Algumas letras brilham diferente
                if (Math.random() > 0.95) {
                    ctx.fillStyle = '#ffffff'; // White flash
                } else if (Math.random() > 0.8) {
                    ctx.fillStyle = '#5a03fc';
                } else {
                    ctx.fillStyle = '#a621ff'; // Default
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); // Aprox ~30 FPS

        const handleResize = () => {
            setCanvasDimensions();
            columns = canvas.width / fontSize;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.25, // Baixa opacidade pra ser super elegante e não ofuscar o conteúdo lido
                pointerEvents: 'none',
                backgroundColor: 'transparent'
            }}
        />
    );
};

export default MatrixBackground;
