<template>
<select @change="onChange" v-model="selected" class="form-select border p-2 mt-4 rounded">
    <option value="0">Select Country</option>
    <option v-for="country in countries" :value="country.ID" :key="country.ID">{{ country.Country }}</option>    
</select>
<p>your choice is {{ selected }}</p>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
        return {
            selected: 0,
        }
    },
    methods: {
        onChange() {
            const country = this.countries.find((item) => item.ID === this.selected)
            console.log(this.selected)
            console.log(country, country.ID, country.Country)
            this.$emit('getCountry', country)
        }
    }
}

</script>

<style>
/* 
in find() function which is used to loop array, use should define it in one line. Using "{ }" is error. why don't know why.
but (item) => {
    item.ID === this.selected
} 
This is an error 

*/
</style>