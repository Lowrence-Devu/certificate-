document.getElementById('generate-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const event = document.getElementById('event').value;
    const college = document.getElementById('college').value;

    if (!name || !event || !college) {
        alert('Please fill in all fields.');
        return;
    }

    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = 1200;
    canvas.height = 800;

    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, '#f0f4f8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative border
    ctx.strokeStyle = '#007acc';
    ctx.lineWidth = 20;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

    // Add GDG logo
    const logo = new Image();
    logo.src = 'https://pbs.twimg.com/media/D22N_huX4AEbb1y.jpg'; // GDG logo URL
    logo.onload = function () {
        ctx.drawImage(logo, canvas.width / 2 - 75, 80, 150, 150); // Centered logo at the top

        // Add title
        ctx.fillStyle = '#333';
        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Certificate of Participation', canvas.width / 2, 300);

        // Add decorative line below title
        ctx.strokeStyle = '#007acc';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(400, 320);
        ctx.lineTo(800, 320);
        ctx.stroke();

        // Add participant's name
        ctx.font = 'bold 50px Arial';
        ctx.fillStyle = '#007acc';
        ctx.fillText(name, canvas.width / 2, 400);

        // Add event name
        ctx.font = 'italic 30px Arial';
        ctx.fillStyle = '#333';
        ctx.fillText(`For participating in the event: ${event}`, canvas.width / 2, 470);

        // Add college name
        ctx.font = 'italic 30px Arial';
        ctx.fillStyle = '#007acc';
        ctx.fillText(`Representing: ${college}`, canvas.width / 2, 520);

        // Add fixed event date
        const eventDate = 'March 20, 2025';
        ctx.font = '25px Arial';
        ctx.fillStyle = '#333';
        ctx.fillText(`Event Date: ${eventDate}`, canvas.width / 2, 580);

        // Generate a unique certificate ID
        const certificateId = `GDG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        ctx.font = '20px Arial';
        ctx.fillStyle = '#555';
        ctx.fillText(`Certificate ID: ${certificateId}`, canvas.width / 2, 630);

        // Add footer
        ctx.font = 'bold 25px Arial';
        ctx.fillStyle = '#555';
        ctx.fillText('GDG Community', canvas.width / 2, 700);

        // Add decorative footer line
        ctx.strokeStyle = '#007acc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(400, 720);
        ctx.lineTo(800, 720);
        ctx.stroke();

        // Show the download button
        document.getElementById('download-btn').style.display = 'inline-block';
    };
});

document.getElementById('download-btn').addEventListener('click', function () {
    const canvas = document.getElementById('certificate-canvas');
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
