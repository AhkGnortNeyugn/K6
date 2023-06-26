import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '1m',
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<500'],
      },
  };

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}