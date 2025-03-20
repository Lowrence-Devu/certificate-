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
    canvas.width = 1000;
    canvas.height = 700;

    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f4f4f9');
    gradient.addColorStop(1, '#e0e7ff');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative border
    ctx.strokeStyle = '#007acc';
    ctx.lineWidth = 15;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Add GDG logo
    const logo = new Image();
    logo.src = 'https://pbs.twimg.com/media/D22N_huX4AEbb1y.jpg'; // GDG logo URL
    logo.onload = function () {
        ctx.drawImage(logo, canvas.width / 2 - 50, 40, 100, 100); // Centered logo at the top

        // Add title
        ctx.fillStyle = '#333';
        ctx.font = 'bold 50px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Certificate of Participation', canvas.width / 2, 180);

        // Add decorative line below title
        ctx.strokeStyle = '#007acc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(700, 200);
        ctx.stroke();

        // Add participant's name
        ctx.font = 'bold 60px Arial';
        ctx.fillStyle = '#007acc';
        ctx.fillText(name, canvas.width / 2, 300);

        // Add event name
        ctx.font = 'italic 30px Arial';
        ctx.fillStyle = '#333';
        ctx.fillText(`For participating in the event: ${event}`, canvas.width / 2, 370);

        // Add college name in a distinct style
        ctx.font = 'italic 30px Arial';
        ctx.fillStyle = '#007acc';
        ctx.fillText(`Representing: ${college}`, canvas.width / 2, 420);

        // Add fixed event date
        const eventDate = 'March 20, 2025';
        ctx.font = '25px Arial';
        ctx.fillStyle = '#333';
        ctx.fillText(`Event Date: ${eventDate}`, canvas.width / 2, 470);

        // Generate a unique certificate ID
        const certificateId = `GDG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        ctx.font = '20px Arial';
        ctx.fillStyle = '#555';
        ctx.fillText(`Certificate ID: ${certificateId}`, canvas.width / 2, 520);

        // Add footer
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = '#555';
        ctx.fillText('GDG Community', canvas.width / 2, 600);

        // Add decorative footer line
        ctx.strokeStyle = '#007acc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(300, 620);
        ctx.lineTo(700, 620);
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