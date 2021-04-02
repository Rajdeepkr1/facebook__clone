import React from 'react';
import { useStateValue } from './StateProvider';
import Story from './Story';
import "./Storyreal.css"

function Storyreal() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="storyreal">
            <Story
            image={user.photoURL}
            profileSrc={user.photoURL}
            title={user.displayName}
            />

<Story
            image="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D"
            profileSrc="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D"
            title="Rajdeep kumar"
            />



<Story
            image="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D"
            profileSrc="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/151978665_129989849015364_2007558033539946088_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=cwzSHNj5OmcAX_qNiZ4&_nc_ht=scontent.fpat3-1.fna&oh=16dcc89b679c62190bc19a870de098c1&oe=60579D2D"
            title="Rajdeep kumar"
            />

<Story
            image="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
            profileSrc="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
            title="Rajdeep kumar"
            />

<Story
            image="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
            profileSrc="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/846585cc62eb46e4af47382d84593eb7.jpeg"
            title="Rajdeep kumar"
            />
             
        </div>
    )
}

export default Storyreal;
