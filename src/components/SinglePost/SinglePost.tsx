import {PriorityHigh} from '@mui/icons-material';
import React from "react";

import {Description} from "./components/Description";
import {PostContainer} from "./components/PostContainer";
import {Title} from "./components/Title";
import { Content } from './components/Content';
import Controllers from './components/Controllers';

interface  IProps {
    onEdit: () => Promise<void>,
    onComment: () => Promise<void>,
    onDelete: () => Promise<void>,
    title: string,
    description: string
}
const SinglePost = ({onEdit,onComment,onDelete,title,description}:IProps): JSX.Element => {
    return (
        <PostContainer>
            <Content>
                <Title>
                    <PriorityHigh/>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
            </Content>
            <Controllers onComment={onComment} onDelete={onDelete} onEdit={onEdit}/>
        </PostContainer>
    )
}

export default SinglePost;