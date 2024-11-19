import Repository from '../models/repository.js';
import Controller from './Controller.js';
import Post_Model from '../models/Post.js';

export default class PostController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new Post_Model()));
    }
}