import {
  format
} from 'date-fns';

const ConvertUnixTime = (timestamp) => {
  return format(new Date(timestamp), 'do MMM HH:mm:ss');
}

export default ConvertUnixTime;