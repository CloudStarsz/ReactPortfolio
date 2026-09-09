import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasDimensions();

        const letters = '01{}[]<>/\\;:._+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 18;
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

            ctx.fillStyle = '#4de4ff';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));

                if (Math.random() > 0.985) {
                    ctx.fillStyle = '#dffbff';
                } else if (Math.random() > 0.86) {
                    ctx.fillStyle = '#168aa0';
                } else {
                    ctx.fillStyle = '#4de4ff';
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        draw();
        const interval = reduceMotion ? null : setInterval(draw, 90);

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
            if (interval) clearInterval(interval);
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
                opacity: 0.075,
                pointerEvents: 'none',
                backgroundColor: 'transparent'
            }}
        />
    );
};

export default MatrixBackground;
