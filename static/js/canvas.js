$(function () {
    let c = document.getElementById('canvas'),
        ctx = c.getContext('2d'),
        cw = c.width = 400,
        ch = c.height = 300,
        rand = function (a, b) {
            return ~~((Math.random() * (b - a + 1)) + a);
        },
        dToR = function (degrees) {
            return degrees * (Math.PI / 180);
        },
        circle = {
            x: (cw / 2) + 5,
            y: (ch / 2) + 22,
            radius: 90,
            speed: 5,
            rotation: 0,
            angleStart: 270,
            angleEnd: 90,
            hue: 150,
            thickness: 18,
            blur: 25
        },
        particles = [],
        particleMax = 100,
        updateCircle = function () {
            if (circle.rotation < 360) {
                circle.rotation += circle.speed;
            } else {
                circle.rotation = 0;
            }
        },
        renderCircle = function () {
            ctx.save();
            ctx.translate(circle.x, circle.y);
            ctx.rotate(dToR(circle.rotation));
            ctx.beginPath();
            ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
            ctx.lineWidth = circle.thickness;
            ctx.strokeStyle = gradient1;
            ctx.stroke();
            ctx.restore();
        },

        createParticles = function () {
            if (particles.length < particleMax) {
                particles.push({
                    x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation - 85))) + (rand(0, circle.thickness * 2) - circle.thickness),
                    y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation - 85))) + (rand(0, circle.thickness * 2) - circle.thickness),
                    vx: (rand(0, 100) - 50) / 1000,
                    vy: (rand(0, 100) - 50) / 1000,
                    radius: rand(1, 6) / 2,
                    alpha: rand(10, 20) / 100
                });
            }
        },
        updateParticles = function () {
            let i = particles.length;
            while (i--) {
                let p = particles[i];
                p.vx += (rand(0, 100) - 50) / 750;
                p.vy += (rand(0, 100) - 50) / 750;
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= .01;

                if (p.alpha < .02) {
                    particles.splice(i, 1)
                }
            }
        },
        renderParticles = function () {
            let i = particles.length;
            while (i--) {
                let p = particles[i];
                ctx.beginPath();
                ctx.fillRect(p.x, p.y, p.radius, p.radius);
                ctx.closePath();
                ctx.fillStyle = 'hsla(0, 0%, 100%, ' + p.alpha + ')';
            }
        },
        clear = function () {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, cw, ch);
            ctx.globalCompositeOperation = 'lighter';
        };
    loop = function () {
        clear();
        updateCircle();
        renderCircle();
        createParticles();
        updateParticles();
        renderParticles();
    };
    ctx.shadowBlur = circle.blur;
    ctx.shadowColor = 'hsla(' + circle.hue + ', 80%, 60%, 1)';
    ctx.lineCap = 'round';

    let gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient1.addColorStop(0, 'hsla(' + circle.hue + ', 60%, 50%, .25)');
    gradient1.addColorStop(1, 'hsla(' + circle.hue + ', 60%, 50%, 0)');

    setInterval(loop, 16);
});