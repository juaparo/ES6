import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';

import User, { createURL, gravatar } from './src/user';

const jp = new User("Wes Bos", "wesbos@gmail.com", "wesbos.com");
const profile =createURL(jp.name);
const image = gravatar(jp.email);

console.log(image);

