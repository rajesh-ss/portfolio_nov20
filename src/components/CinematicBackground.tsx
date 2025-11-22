"use client";
import { useEffect, useRef } from 'react';

export default function CinematicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];
        const starCount = 300; // High density of stars

        class Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            twinkleSpeed: number;
            twinkleDirection: number; // 1 for getting brighter, -1 for dimmer

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5 + 0.5; // Small stars
                this.opacity = Math.random();
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
            }

            update() {
                this.opacity += this.twinkleSpeed * this.twinkleDirection;

                if (this.opacity > 1) {
                    this.opacity = 1;
                    this.twinkleDirection = -1;
                } else if (this.opacity < 0.2) {
                    this.opacity = 0.2;
                    this.twinkleDirection = 1;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class ShootingStar {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            active: boolean;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height / 2;
                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 10 + 5;
                this.opacity = 0;
                this.active = false;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height / 2;
                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 10 + 5;
                this.opacity = 0;
                this.active = true;
            }

            update() {
                if (!this.active) {
                    if (Math.random() < 0.005) this.reset();
                    return;
                }

                this.x -= this.speed;
                this.y += this.speed / 2;
                this.opacity += 0.05;

                if (this.opacity > 1) this.opacity = 1;

                if (this.x < -100 || this.y > height + 100) {
                    this.active = false;
                }
            }

            draw() {
                if (!this.active || !ctx) return;
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.length, this.y - this.length / 2);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y - this.length / 2);
                ctx.stroke();
            }
        }

        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        for (let i = 0; i < 3; i++) {
            shootingStars.push(new ShootingStar());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Deep space background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#020024');
            gradient.addColorStop(0.5, '#090979');
            gradient.addColorStop(1, '#000000');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw Galaxies/Nebulae with higher opacity
            drawGalaxy(ctx, width * 0.2, height * 0.3, 400, 'rgba(124, 58, 237, 0.6)'); // Bright Purple
            drawGalaxy(ctx, width * 0.8, height * 0.7, 500, 'rgba(59, 130, 246, 0.6)'); // Bright Blue
            drawGalaxy(ctx, width * 0.5, height * 0.5, 300, 'rgba(236, 72, 153, 0.4)'); // Pink

            // Draw Moon (Bigger and brighter)
            drawMoon(ctx, width - 150, 150, 60);

            stars.forEach(s => {
                s.update();
                s.draw();
            });

            shootingStars.forEach(s => {
                s.update();
                s.draw();
            });

            requestAnimationFrame(animate);
        };

        const drawGalaxy = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
            const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
            g.addColorStop(0, color);
            g.addColorStop(0.5, color.replace('0.6', '0.2').replace('0.4', '0.1')); // Fade out
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        };

        const drawMoon = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
            // Stronger Glow
            ctx.shadowBlur = 80;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();

            // Reset shadow
            ctx.shadowBlur = 0;

            // Craters (more visible)
            ctx.fillStyle = '#e5e5e5';
            ctx.beginPath();
            ctx.arc(x - 15, y + 10, 8, 0, Math.PI * 2);
            ctx.arc(x + 20, y - 15, 12, 0, Math.PI * 2);
            ctx.arc(x + 10, y + 25, 6, 0, Math.PI * 2);
            ctx.fill();
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
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
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
}
