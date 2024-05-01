export default function getFormattedDate(dayIncrement: number): string {
    const today = new Date();
    const futureDate = new Date(today.getTime() + dayIncrement * 24 * 60 * 60 * 1000);

    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(futureDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;

}