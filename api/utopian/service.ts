import * as request from 'request';
const RETRIEVE_PROJECTS_URL = `https://utopian.rocks/api/posts?status=pending`;

export function retrievePendingPosts(): Promise<any> {
  return new Promise((resolve) => {
    request.get({
      url: RETRIEVE_PROJECTS_URL,
      json: true
    }, (error, response, body) => {
      resolve(body);
    });
  });
}
