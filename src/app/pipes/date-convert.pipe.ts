import { Pipe, PipeTransform } from "@angular/core";
import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

@Pipe({
  name: "dateConvert",
  standalone: true,
})
export class DateConvertPipe implements PipeTransform {
  transform(timestamp: Timestamp): string {
    const date = timestamp?.toDate();
    let result = "";
    result = dayjs(date).fromNow();
    return result;
  }
}
