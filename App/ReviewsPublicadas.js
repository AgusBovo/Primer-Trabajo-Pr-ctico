app.component('review-list',{
    props:{
        reviews:{
            type:Array,
            required: true
        }
    },
    template:

    `<div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v.for="(review, index) in reviews" :key="index">
            {{ review.name }} puntuó con {{ review.rating }} estrellas
            <br>
            "{{ review.review }}"
            </li>
        </ul>
    </div>`
})