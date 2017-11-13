import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var store = new Vuex.Store({
	state:{
		school_range_obj:[],
        school_college_obj:[]
	},
	mutations:{
		updata:function(state,list){
			state.school_range_obj = list;
			// console.log(state.school_range_obj)
		},
        updata_college:function(state,list){
            state.school_college_obj = list;
        },
		reset_school_range: function(state, item) {
            let arr;
            arr = state.school_range_obj.map((value, index) => {
                if (item.index == index) {
                    value.selected = item.selected;
                    // console.log(item.selected)
                } else {
                    value.selected = false;
                }
                return value
            });

            let selected_none = true;
            arr.forEach(item => {
                if (item.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        reset_school_college:function(state, item){
            state.school_college_obj[0].selected = false;

            if(item.index==0){
                state.school_college_obj.map((value,index)=>{
                    value.selected = (index == 0);
                    return value;
                })
            }
            state.school_college_obj.map((value, index)=>{
                if(index == item.index){
                    value.selected = item.selected
                }
                return value;
            })

            let flag = true;
            state.school_college_obj.forEach(item => {
                if (item.selected) {
                    flag = false;
                }
            })
            if (flag) {
                state.school_college_obj[0].selected = true;
            }
        },
        clear_range:function (state){
            state.school_range_obj.forEach((item,index) => {
                item.selected = (index == 0)
            })
        },
        clear_area:function (state) {
            state.school_college_obj.forEach((item,index) => {
                item.selected = (index == 0)
            })
        }
	},
    getters:{
        selected_range:function(state){
            var str = '';
            state.school_range_obj.forEach((value, index) => {
                if (value.selected) {
                    str += value.value;
                }
            })
            return str;
        },
        selected_college:function(state){
            // var str = '';
            var arr = [];
            state.school_college_obj.forEach((value, index) => {
                if (value.selected) {
                    arr.push(value.value)
                    // str += value.value + '，';
                }
            })
            return arr.join(',')
            // return str;
        }
    }
})
export default store;