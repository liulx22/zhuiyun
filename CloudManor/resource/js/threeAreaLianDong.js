//加载某市下所有的县数据
function loadAllAreaByCity(pId) {
    $.ajax({
        type:"post",
        url:"http://localhost:8088/Info/Xian",
        data:{"pId":pId},
        dataType:"json",
        success:function(data){
            $("#xian").empty();
            if (null!=data && data.length>0){
                var str="";
                for (var i = 0; i < data.length; i++) {
                    str+="<option value='"+data[i].id+"'>"+data[i].name+"</option>";
                }
                $("#xian").html(str);
            }
        },error:function(){
            alert("ErrorX");
        }
    });

    /*$.ajax({
        url:"/system/findAreaBypId",
        type:"post",
        data:{"pId":pId},
        dataType:"json",
        success:function (data) {
            if(null!=data && data.length>0){
                var str="";
                for(var i=0;i<data.length;i++){
                    str+="<option value='"+data[i].id+"'>"+data[i].name+"</option>";
                }
                $("#area").html(str);
            }
        },error:function () {
            alert("加载市数据失败！");
        }
    })*/
}
//加载某省下所有的市数据
function loadAllCityByProvince(pId) {
    $.ajax({
        type:"post",
        url:"http://localhost:8088/Info/Shi",
        data:{"pId":pId},
        dataType:"json",
        success:function(data){
            $("#shi").empty();
            if (null!=data && data.length>0){
                var str = "";
                for (var i=0;i<data.length;i++){
                    str+="<option value='"+data[i].id+"'>"+data[i].name+"</option>";
                }
                $("#shi").html(str);
            }
        },error:function(){
            alert("ErrorShi");
        }
    });
}
//加载所有的省数据，pId=1
function loadAllAearBypId(pId) {
    $.ajax({
        type:"post",
        url:"http://localhost:8088/Info/Sheng",
        data:{"pId":pId},
        dataType:"json",
        success:function(data){
            // $("#shi").empty();
            if (null!=data && data.length>0){
                var str = "";
                for (var i=0;i<data.length;i++){
                    str+="<option value='"+data[i].id+"'>"+data[i].name+"</option>";
                }
                $("#sheng").html(str);
            }
        },error:function(){
            alert("ErrorSheng");
        }
    });


    /*$.ajax({
        url:"/system/findAreaBypId",
        type:"post",
        data:{"pId":pId},
        dataType:"json",
        success:function (data) {
            if(null!=data && data.length>0){
                var str="";
                for(var i=0;i<data.length;i++){
                    str+="<option value='"+data[i].id+"'>"+data[i].name+"</option>";
                }
                $("#province").html(str);
            }
        },error:function () {
            alert("加载省数据失败！");
        }
    })*/
}
//用于省市县的数据回显
function loadThreeAreaByAreaId(areaId) {
    $.ajax({
        url:"http://localhost:8088/Info/loadThreeAreaByAreaId",
        type:"post",
        data:{"areaId":areaId},
        dataType:"json",
        success:function (data) {
            if(null!=data.provinceList && data.provinceList.length>0){
                var str="";var temp="";
                for(var i=0;i<data.provinceList.length;i++){
                    temp=data.provinceList[i];
                    if(temp.id==data.provinceId){
                        str+="<option value='"+temp.id+"' selected='selected'>"+temp.name+"</option>";
                    }else{
                        str+="<option value='"+temp.id+"'>"+temp.name+"</option>";
                    }
                }
                $("#sheng").html(str);
            }
            if(null!=data.cityList && data.cityList.length>0){
                var str="";var temp="";
                for(var i=0;i<data.cityList.length;i++){
                    temp=data.cityList[i];
                    if(temp.id==data.cityId){
                        str+="<option value='"+temp.id+"' selected='selected'>"+temp.name+"</option>";
                    }else{
                        str+="<option value='"+temp.id+"'>"+temp.name+"</option>";
                    }
                }
                $("#shi").html(str);
            }
            if(null!=data.areaList && data.areaList.length>0){
                var str="";var temp="";
                for(var i=0;i<data.areaList.length;i++){
                    temp=data.areaList[i];
                    if(temp.id==data.areaId){
                        str+="<option value='"+temp.id+"' selected='selected'>"+temp.name+"</option>";
                    }else{
                        str+="<option value='"+temp.id+"'>"+temp.name+"</option>";
                    }
                }
                $("#xian").html(str);
            }
        },error:function () {
            console.log("加载当前用户的省市县信息失败！");
        }
    })
}