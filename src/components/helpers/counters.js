import comments from "../data/suggestionData";


let FeedbackCounter = (status) =>{
    let counter = 0;
    comments.forEach(comment => {
        if (comment.status === status){
            counter = counter + 1; 
        } 
        return counter
        
    });
}

export default FeedbackCounter