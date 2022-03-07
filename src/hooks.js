import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';

export const handle = async ({ event, resolve }) => {
	// const cookies = cookie.parse(request.headers.cookie || '');
	console.log(event.request.headers.cookie);
	// console.log(cookies);
	// request.locals.userid = cookies.userid || uuid();

	// // TODO https://github.com/sveltejs/kit/issues/1046
	// if (request.query.has('_method')) {
	// 	request.method = request.query.get('_method').toUpperCase();
	// }

	const response = await resolve(event);

	// if (!cookies.userid) {
	// 	// if this is the first time the user has visited this app,
	// 	// set a cookie so that we recognise them when they return
	// 	response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
	// 		path: '/',
	// 		httpOnly: true
	// 	});
	// }

	// if (response.headers.get('content-type').startsWith('text/html')) {
	// 	const body = await response.text();
	// 	return new Response(body.replace(/cloud/g, 'butt'), response);
	// }

	return response;
};
