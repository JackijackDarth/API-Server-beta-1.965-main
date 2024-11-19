import Model from './model.js';

export default class Post extends Model {
    constructor() {
        super();

        this.addField('Id', 'string');
        this.addField('Title', 'string');
        this.addField('Text', 'string');
        this.addField('Category', 'string');
        this.addField('Image', 'asset');
        this.addField('Creation', 'string');
        this.setKey("Id");
    }

}