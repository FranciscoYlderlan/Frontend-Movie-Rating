import dayjs from "dayjs";

export function formatterDate(ISODatetime) {
    const datetime = dayjs(ISODatetime);
    const [date, time] = String(dayjs(datetime).format("DD/MM/YY HH:mm") ).split(' ');
    return [date, time];
}