import { parseISO, format } from 'date-fns';

export function formatDate(date: string) {
  return format(parseISO(date), 'LLLL d, yyyy');
}
