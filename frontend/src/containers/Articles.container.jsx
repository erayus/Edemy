import React, {Component} from 'react';
import Article from '../components/Article.component';
import axios from 'axios';

const data = [];
    for (let i = 0; i < 23; i++) {
        data.push({
            href: 'http://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

class Articles extends Component { 

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                console.log(res.data);
                this.setState({articles: res.data})
            })
    }
    
    render() {
        return (
            <div>
                <Article data={this.state.articles}/>
            </div>
        );
    }
}


export default Articles;