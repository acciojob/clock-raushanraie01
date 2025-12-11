let para = document.createElement('p');
para.id = "timer";

function updateTimer() {
    const now = new Date();

    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    let session = "AM";

    if (hours == 0) {
        hours = 12;
    } else if (hours >= 12) {
        if (hours > 12) hours -= 12;
        session = "PM";
    }

    hours = String(hours).padStart(2, "0");

    const formatted = `${day}/${month}/${year}  ${hours}:${minutes}:${seconds} ${session}`;

    para.innerHTML = formatted;
}

updateTimer();
setInterval(updateTimer, 1000)

document.body.append(para)




			
