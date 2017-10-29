//Importing Doughnut class from the vue-chartjs wrapper
import { Doughnut } from 'vue-chartjs'

export default{ 
    extends: Doughnut,
    props: ['data'], 
    data () {
        return {
          //Chart.js options that controls the appearance of the chart
          options: {
            responsive: true,
            maintainAspectRatio: false,
                      
          }
        }
      },   
    mounted() {
        this.renderChart(this.data, this.options)
      }
      
}



