<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>登录</title>  
    <link rel="stylesheet" type="text/css" href="/kefaxin/Public/css/mycss.css">
    <link rel="stylesheet" href="/kefaxin/Public/css/pintuer.css">
    <link rel="stylesheet" href="/kefaxin/Public/css/admin.css">
    <script src="/kefaxin/Public/js/jquery.js"></script>
    <script src="/kefaxin/Public/js/pintuer.js"></script>
    <style type="text/css">
    
    </style>  
</head>
<body>
<div class="bg"></div>
<div class="container">
    <div class="line bouncein">
        <div class="xs6 xm4 xs3-move xm4-move">
            <div style="height:150px;"></div>
            <div class="media media-y margin-big-bottom">           
            </div>   
            <div class="panel loginbox" style="text-align: center;">
                <div class="text-center margin-big padding-big-top"><h1>后台管理中心</h1></div>
                <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                    <div class="form-group">
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="name" id="name" placeholder="登录账号" data-validate="required:请填写账号" />
                            <span class="icon icon-user margin-small"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="field field-icon-right">
                            <input type="password" class="input input-big" name="pwd" id="pwd" placeholder="登录密码" data-validate="required:请填写密码" />
                            <span class="icon icon-key margin-small"></span>
                        </div>
                    </div>
                </div>
                <div style="padding:30px;">
                    <input type="button" class="button button-block bg-main text-big input-big" value="登录" id="login">
                    <span class="che"></span>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
$(function(){
    $('#login').click(function(){
        var name = $("#name").val();
        var pwd = $("#pwd").val();
        
        $.ajax({
            type:'get',
            dataType:'text',
            url:'/kefaxin/admin.php/Home/Index/loginCheck?name='+name+'&pwd='+pwd+'',
            success:function(data){
                if (data==1) {
                    //alert('yes')
                    $('.che').css({'opacity':'0','color':'#00AAEE'}).html('登录成功').animate({
                        opacity:1,
                    },500);
                    location.href='/kefaxin/admin.php/Home/Index/index';
                }else if(data==2){
                    $('.che').css('opacity','0').html('用户名或密码错误').animate({
                        opacity:1
                    },500);
                }
            }
        })
    })
})
</script>
</body>
</html>