export default function TodaysDate()
{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date();
    const dayWord = days[date.getDay()];
    const dateNum = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const todaysDate = `${dayWord} ${dateNum} ${month} ${year}`;

    return todaysDate
}