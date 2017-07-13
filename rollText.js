export default {
    install(Vue) {
        require('./rollText.css');
        Vue.component('roll-text', {
            template: `<ul class="x-text-roll-ul" :style="{animationName:'x-text-roll-'+direction,animationDuration:duration+'s',height:wrapHeight+'px'}">
                           <li class="x-text-roll-li"
                                :style="{height:height+'px',lineHeight:height+'px',textAlign:align,marginTop:'-'+height/2+'px',transform:'rotateX(' + (360 / textList.length) * index + 'deg) translateZ('+textList.length*height/Math.PI/2+'px)'}"
                                v-for="(item,index) in textList">{{item}}
                           </li>
                       </ul>`,
            props: {
                'originList': {
                    default: ()=> {
                        return ['哈哈哈', '哈哈哈', '哈哈哈', '哈哈哈']
                    }
                },
                height: {
                    type: [String, Number],
                    default: 20
                },
                align: {
                    type: String,
                    default: 'center'
                },
                duration: {
                    type: [String, Number],
                    default: 10
                },
                wrapHeight: {
                    type: [String, Number],
                    default: 200
                },
                direction:{
                    type:String,
                    default:'down'
                },
                minItem:{
                    type:[String,Number],
                    default:20
                }
            },
            data() {
                return {
                    calList: this.originList
                }
            },
            computed: {
                textList(){
                    while (this.calList.length < this.minItem) {
                        this.calList = [...this.calList, ...this.calList]
                    }
                    return this.calList;
                }
            }
        })
    },
}