app.component ('review-form',{
template:

`<form class='review-form' @submit.prevent="onSubmit">
<h3> Deja una review </h3>
<label for="nombre">Nombre:</label>
<input id="nombre" v-model="nombre"></input>
<br>
<label for="review">Review:</label>
<textarea id="review" v-model="review"></textarea>
<br>
<laber for="rating">Rating</laber>
<select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
</select>

<input class="button" type="submit" value="Submit"></input>

</form>`,
 data() {
     return{
         nombre:'',
         review:'',
         rating: null,
     }
 },
 methods:{
    onSubmit() {
     let productReview ={
        nombre: this.nombre,
        review: this.review,
        rating: this.rating
        }
        this.$emit('review-submitted', productReview)

        this.nombre =''
        this.review=''
        this.rating=''
    }
}
})