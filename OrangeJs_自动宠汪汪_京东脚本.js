log("*   ╉ The Animal Protecting ╊");
log("*　　┏┓　　　┏┓+ +");
log("*　┏┛┻━━━┛┻┓ + +");
log("*　┃　　　　　　　┃");
log("*　┃　　　━　　　┃ ++ + + +");
log("*　████━████ 　+");
log("*　┃　　　　　　　┃ +");
log("*　┃　　　┻　　　┃")
log("*　┃　　　　　　　┃ + +");
log("*　┗━┓　　　┏━┛");
log("*　　　┃　　　┃");
log("*　　　┃　　　┃ + + + +");
log("*　　　┃　　　┃　　　　");
log("*　　　┃　　　┃ + 　");
log("*　　　┃　　　┃")
log("*　　　┃　　　┃　　+");
log("*　　　┃　　　┗━━━┓ + +")
log("*　　　┃　　　　　　　┣┓+ + + ");
log("*　　　┃　　　　　　　┏┛+ +");
log("*　　　┗┓┓┏━┳┓┏┛ + ");
log("*　　　　┃┫┫　┃┫┫");
log("*　　　　┗┻┛　┗┻┛+ + ");
log("*    Code is far away from bug!");
log("*        神兽保佑,代码无bug");


dialogs_js();
var height = device.height;
var width = device.width;

var GJCwords = "宠汪汪" //京东搜索关键词
function dialogs_js() {
    var ScriptVersion = ("Beta1.1"); //版本
    log("软件脚本已开始运行，如果没有弹出菜单请强行停止再打开本软件！");
    var options_ = ["▶️ 开始运行脚本", "🕒 定时运行脚本", "⏹ 停止运行脚本", "🌐 向作者反馈问题", "*️⃣ 脚本介绍/作者信息", "ℹ️ Q&A常见问题解答", "🔧 手动打开模式"]
    var i = dialogs.select("*+*+*+* 橘衫の脚本 *+*+*+*\n*+*+*+*  Orange Js *+*+*+*\n\n欢迎使用 (◍•ᴗ•◍)❤" + "\n" + "“自动宠汪汪”" + ScriptVersion + "\n请选择一个要进行的选项", options_);
    if (i < 0) {
        toastLog("没有选择，如需关闭对话框\n  请选择“停止运行脚本”");
        dialogs_js();
    } else if (i == 0) {
        toastLog(options_[i]);
        context_Manualstate = 0;
        Set_Back_way();
    } else if (i == 2) {
        toastLog(options_[i]);
        exit();
    } else if (i == 3) {
        toastLog(options_[i]);
        app.openUrl("https://wj.qq.com/s2/5238744/d982");
        dialogs_js();
    } else if (i == 4) {
        toastLog(options_[i]);
        alert("=(^･ω･^)=  脚本作者\n酷安@橘衫下邂逅的时光", "“自动宠汪汪” " + ScriptVersion + "\n当前软件版本" + app.versionName + "(" + app.versionCode + ")\n\n全自动的京东活动脚本！\n支持多种分辨率，安卓7+无需ROOT！\n支持启动后自动更新脚本，无需费心即可保持最新，且开放全部的脚本代码！\n脚本的全部运行不加任何广告，不干任何不相关的事情！不触碰任何个人隐私！\n此脚本为兴趣制作，仅供参考，严禁售卖\n\n如有任何问题，欢迎向作者反馈哦～");
        dialogs_js();
    } else if (i == 1) {
        toastLog("请稍候，正在检测权限...")
        context_Manualstate = 0;
        toastLog(options_[i]);
        device.keepScreenDim();
        toastLog("检测权限设置……");
        context_Manualstate = 0;
        toastLog("等待无障碍权限开启……\n您必须手动授予本软件无障碍权限\n否则本软件将无法工作！");
        auto.waitFor();
        toastLog("无障碍权限已开启" + "\n" + "继续运行脚本……");
        sleep(2000);
        toastLog("为保证脚本正常运行\n请授予本软件悬浮窗权限");
        sleep(2000);
        var test_rawWindow = floaty.rawWindow(
            <frame gravity="center" bg="#00000000"/>
        );
        test_rawWindow.setSize(-1, -1);
        test_rawWindow.setTouchable(false);
        setTimeout(() => {
            test_rawWindow.close();
        }, 1000);
        toastLog("悬浮窗权限已开启！");
        sleep(2000);
        wait_Time_over();
    } else if (i == 5) {
        toastLog(options_[i]);
        Q_A_();
    } else if (i == 6) {
        toastLog(options_[i]);
        context_Manualstate = 1; 
        Set_Back_way()//设置手动模式
    }
}

function Q_A_() {
    var Q1 = ("1⃣MIUI11如何开启无障碍服务？");
    var A1 = ("💬一般情况下脚本运行会自动调出无障碍服务设置，之后只需在无障碍服务设置中找到“已下载的服务”点击后找到“橘衫の脚本”打开即可。\n手动打开无障碍权限的方法为\n①打开“设置”→②在“搜索系统设置项”搜索“无障碍”点击第一项→③再在无障碍设置中找到“已下载的服务”点击进入后找到“橘衫の脚本”打开即可");

    var Q2 = ("2⃣脚本突然停到京东搜索框不运行了，怎么办？");
    var A2 = ("💬这种情况一般是京东卡顿引起的。如脚本停到搜索框不动且日志中提示“找不到搜索按钮”您就可以尝试关掉京东再打开至京东搜索界面即可。若依然没有运行可尝试重启手机后再次运行脚本");

    var Q3 = ("3⃣脚本运行到活动界面提示找不到任务");
    var A3 = ("💬如出现此问题请先检查一下“活动界面”中是不是真的没有任务了，如果有任务可以尝试重启手机后重新运行脚本，若重启后依然在活动界面提示找不到任务请立即向作者反馈。");

    var Q4 = ("4⃣安卓6.0以下系统能否使用本脚本？");
    var A4 = ("💬本脚本完全使用Auto.js制作。因此在安卓6.0以下系统会不支持无障碍服务以及造成大量函数失效，因此本脚本是不支持安卓6.0及以下系统的，敬请谅解");

    var Q5 = ("5⃣定时运行之后却没有在预定的时间运行脚本");
    var A5 = ("💬使用定时运行脚本会自动设置屏幕常亮并驻留后台，但清理本软件或者锁屏甚至关机以及关闭本软件必要的无障碍权限和悬浮窗权限都将会使定时运行失效，建议在定时运行时将本软件加入清理白名单或锁定本软件后台且不要锁屏以及不要关闭无障碍与悬浮窗权限即可");

    var Q_A_options = [Q1, Q2, Q3, Q4, Q5]
    var Q_A = dialogs.select("◖⚆ᴥ⚆◗\n Q&A常见问题解答", Q_A_options);
    if (Q_A == 0) {
        dialogs.alert(Q1, A1);
        Q_A_();
    } else if (Q_A == 1) {
        dialogs.alert(Q2, A2);
        Q_A_();
    } else if (Q_A == 2) {
        dialogs.alert(Q3, A3);
        Q_A_();
    } else if (Q_A == 3) {
        dialogs.alert(Q4, A4);
        Q_A_();
    } else if (Q_A == 4) {
        dialogs.alert(Q5, A5);
        Q_A_();
    } else if (Q_A < 0) {
        dialogs_js();
    }
}

function Set_Back_way() {
    //💟🕎⛎设定返回方法及滑动速度的代码
    var options_hq = ["🔙 普通的返回\n(使用无障碍权限)", "#⃣ 使用ROOT返回\n(必须授予本软件ROOT权限)", "🔍 通过调用搜索界面进入\n（“曲线救国法” 若其它返回均失效\n    来尝试此方法吧）", "👉👉🏻👉🏼👉🏽👉🏾👉🏿 \n从屏幕中间从左向内滑动\n(全面屏手势返回 例如:小米MIUI)", "              👈🏿👈🏾👈🏽👈🏼👈🏻👈 \n从屏幕中间从右向内滑动\n(全面屏手势返回 例如:华为EMUI)", "👆👆🏻👆🏼👆🏽👆🏾👆🏿 \n从屏幕左侧下方向上滑动\n(全面屏手势返回 例如:锤子Smartisan UI)", "               ☝🏿☝🏾☝🏽☝🏼☝🏻☝️ \n从屏幕右侧下方向上滑动\n(全面屏手势返回)"]
    var i_back = dialogs.select(" Hi! ( ╹▽╹ )\n请选择一个方法\n用于实现返回操作", options_hq);
    if (i_back >= 0) {
        toastLog("您选择的是" + options_hq[i_back]);
        sleep(2000);
        var options_select = options_hq[i_back];
        context_i_back = i_back;
    } else {
        toastLog("没有选择返回方法！");
        device.cancelKeepingAwake();
        dialogs_js();
    }
    if (i_back > 2) {
        var options_hd = ["200毫秒\n(默认，如果太快请选其它)", "500毫秒", "800毫秒", "1秒(1000毫秒)", "1.5秒（1500毫秒）", "2秒（2000毫秒）"]
        var iix = dialogs.select("Ok! (・∀・) 您选择了:\n" + options_select + "\n请选择滑动速度\n单位:毫秒（1秒=1000毫秒）", options_hd);
    }
    if (iix == 0) {
        context_gestures_speed = 200;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 1) {
        context_gestures_speed = 500;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 2) {
        context_gestures_speed = 800;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 3) {
        context_gestures_speed = 1000;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 4) {
        context_gestures_speed = 1500;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix == 5) {
        context_gestures_speed = 2000;
        toastLog("滑动速度设定为\n" + context_gestures_speed + "毫秒");
        sleep(2000);
    }
    if (iix < 0) {
        toastLog("没有选择滑动速度");
        Set_Back_way();
    }
}
sleep(1000);
toastLog("等待无障碍权限开启……\n您必须手动授予本软件无障碍权限\n否则本软件将无法工作！");
auto.waitFor();
toastLog("无障碍权限已开启" + "\n" + "继续运行脚本……");

function wait_Time_over() {
    var i_wait = dialogs.singleChoice("🕗 定时运行\n\n(＾∇＾)ﾉ♪\n请选择一个选项\n计时结束会自动运行", ["1分钟后运行", "5分钟后运行", "10分钟后运行", "30分钟后运行", "一小时后运行", "两小时后运行", "三小时后运行", "五小时后运行", "八小时后运行"], 2);
    if (i_wait < 0) {
        toast("您取消了选择");
        device.cancelKeepingAwake();
        dialogs_js();
    }
    if (i_wait >= 0) {
        context_i_wait = i_wait;
    }
    if (i_wait == 0) {
        var choice_confirm = dialogs.confirm("您选择了1分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 1) {
        var choice_confirm = dialogs.confirm("您选择了5分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 2) {
        var choice_confirm = dialogs.confirm("您选择了10分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 3) {
        var choice_confirm = dialogs.confirm("您选择了30分钟后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 4) {
        var choice_confirm = dialogs.confirm("您选择了一小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 5) {
        var choice_confirm = dialogs.confirm("您选择了两小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 6) {
        var choice_confirm = dialogs.confirm("您选择了三小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 7) {
        var choice_confirm = dialogs.confirm("您选择了五小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
    if (i_wait == 8) {
        var choice_confirm = dialogs.confirm("您选择了八小时后运行", "点击确定进行一次设定返回操作的方法后，脚本将在您设定的时间结束后开始自动运行\n请不要清理本软件的后台或者锁屏手机等，否则可能会造成定时任务失效");
        if (choice_confirm == false) {
            toastLog("取消了定时运行确认");
            wait_Time_over();
        } else {
            Set_Back_way();
            waiting_time();
        }
    }
}

function waiting_time() {
    //计时运行脚本
    if (context_i_wait == 0) {
        var Seconds = 60;
        for (Seconds == 60; Seconds > 0; Seconds--) {
            console.warn("【定时运行】计时中……\n" + Seconds + "秒后开始运行");
            sleep(1000);
        }
    }
    if (context_i_wait == 1) {
        var Minutes = 4;
        for (Minutes == 4; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 2) {
        var Minutes = 9;
        for (Minutes == 9; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 3) {
        var Minutes = 29;
        for (Minutes == 29; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 4) {
        var Minutes = 59;
        for (Minutes == 59; Minutes >= 0; Minutes--) {
            if (Minutes >= 0) {
                var Seconds = 60;
                for (Seconds == 60; Seconds > 0; Seconds--) {
                    console.warn("【定时运行】计时中……\n" + Minutes + "分钟" + Seconds + "秒后开始运行");
                    sleep(1000);
                }
            }
        }
    }
    if (context_i_wait == 5) {
        var Hours = 1;
        for (Hours == 1; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
    if (context_i_wait == 6) {
        var Hours = 2;
        for (Hours == 2; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
    if (context_i_wait == 7) {
        var Hours = 4;
        for (Hours == 4; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
    if (context_i_wait == 8) {
        var Hours = 7;
        for (Hours == 7; Hours >= 0; Hours--) {
            var Minutes = 59;
            for (Minutes == 59; Minutes >= 0; Minutes--) {
                if (Minutes >= 0) {
                    var Seconds = 60;
                    for (Seconds == 60; Seconds > 0; Seconds--) {
                        console.warn("【定时运行】计时中……\n" + Hours + "小时" + Minutes + "分钟" + Seconds + "秒后开始运行");
                        sleep(1000);
                    }
                }
            }
        }
    }
}

//下面是悬浮窗
var window = floaty.window(
    <frame>
        <button id="action" text="点击停止脚本" w="120" h="40" bg="#F0EB4336"/>
    </frame>
);
setInterval(() => {}, 1000);
var execution = null;
//记录按键被按下时的触摸坐标
var x = 0,
    y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;
window.action.setOnTouchListener(function(view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if (new Date().getTime() - downTime > 1500) {
                toast("长按可以移动位置哦～");
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                onClick();
            }
            return true;
    }
    return true;
});

function onClick() {
    dialogs.alert("已停止运行脚本！");
    log("用户点击了停止按钮");
    exit();
}

function Justback() {
    //💝💝💝💝💝使用用户设定的返回方法
    if (context_i_back == 0) {
        sleep(1000);
        toastLog("使用普通的返回");
        back();
        sleep(2000);
    }
    if (context_i_back == 1) {
        sleep(1000);
        toastLog("使用ROOT返回\n请确保已给ROOT权限！");
        Back();
        sleep(2000);
    }
    if (context_i_back == 2) {
        openJDinSearch();
    }
    if (context_i_back == 3) {
        sleep(1000);
        toastLog("从屏幕中间向从左向内滑动来返回");
        gestures([context_gestures_speed, [0, height / 2],
            [500, height / 2]
        ]);
        sleep(2000);
    }
    if (context_i_back == 5) {
        sleep(1000);
        toastLog("从屏幕左侧下方向上滑动来返回");
        gestures([context_gestures_speed, [width / 2 - 300, height - 1],
            [width / 2 - 300, height - 500]
        ]);
        sleep(2000);
    }
    if (context_i_back == 4) {
        sleep(1000);
        toastLog("从屏幕中间向从右向内滑动来返回");
        gestures([context_gestures_speed, [width - 1, height / 2],
            [width - 500, height / 2]
        ]);
        sleep(2000);
    }
    if (context_i_back == 6) {
        sleep(1000);
        toastLog("从屏幕左侧下面向上面滑动来返回");
        gestures([context_gestures_speed, [width / 2 + 300, height - 1],
            [width / 2 + 300, height - 500]
        ]);
        sleep(2000);
    }
}

function openJDinSearch() {
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.jingdong.app.mall",
        className: "com.jingdong.app.mall.main.MainActivity"
        //此处可以加入其他内容，如data、extras
    });
    var deng = 5;
    for (deng == 5; deng > 0; deng--) {
        if (desc("分类").findOnce() != null) {
            toastLog("已处于京东主界面");
            var deng = 0;
            sleep(2000);
        } else {
            toastLog("正在打开京东中……\n等待缓冲剩余" + deng + "秒…");
            sleep(2000);
        }
    }
    A();
}

function A() {
    var A = desc("分类").findOnce();
    if (A != null) {
        var B = A.bounds();
        click(B.centerX(), B.centerY());
        sleep(2000);
    } else {
        if (desc("分类").findOnce() == null) {
            var While = 1;
        }
        while (While == 1) {
            toastLog("当前未处于京东主界面\n尝试返回京东主界面中……");
            Justback();
            sleep(2000);
            if (desc("分类").findOnce() != null) {
                var While = 0;
                toastLog("已返回京东主界面");
                sleep(2000);
                openJDinSearch();
            }
        }
    }
    // var Ac=id("a3l").findOnce();
    var Ac = className("android.widget.TextView").id("com.jd.lib.category:id/a3l").findOnce();
    if (Ac != null) {
        var a = Ac.bounds();
        sleep(1000);
        click(a.centerX(), a.centerY());
        toastLog("已尝试点击“分类搜索框”");
        sleep(1000);
        if (id("com.jd.lib.search:id/a3o").findOnce() == null) {
            sleep(2000);
            if (id("com.jd.lib.search:id/a3o").findOnce() == null) {
                sleep(2000);
                if (id("com.jd.lib.search:id/a3o").findOnce() == null) {
                    openJDinSearch();
                }
            }
        } else {
            toastLog("已找到“京东搜索框”尝试搜索进入活动…");
            BS();
        }
    } else {
        toastLog("未找到“分类”中的搜索栏\n重试中……");
        openJDinSearch();
    }
}

function BS() {
    setText(GJCwords); //😇
    sleep(1000);
    var Z = id("com.jingdong.app.mall:id/a9b").findOnce();
    if (Z != null) {
        var z = Z.bounds();
        click(z.centerX(), z.centerY());
        toastLog("已找到搜索按钮\n并已尝试点击…");
        sleep(2000);
        C();
    } else {
        toastLog("找不到搜索按钮\n无法进行搜索操作\n重试中……");
        A();
    }
}

function C() {
    var deng = 10;
    for (deng == 10; deng > 0; deng--) {
        if (id("com.jd.lib.search:id/ak1").findOnce() != null) {
            if (id("com.jd.lib.search:id/bw").findOnce() != null) {
                var d = id("com.jd.lib.search:id/bw").findOnce();
                if (d != null) {
                    var dd = d.bounds();
                    click(dd.centerX(), dd.centerY());
                    toastLog("存在“重新加载”按钮\n已尝试点击……");
                    sleep(2000);
                    var deng = 10;
                }
            } else {
                toastLog("正在等待“宠汪汪”活动加载\n剩余" + deng + "秒……");
                sleep(1500);
            }
        } else {
            var deng = 0;
            toastLog("检测到当前并未处于京东搜索\n重试中……");
            BS();
        }
    }
    D();
}

function D() {
    var jr = id("com.jd.lib.search:id/ako").findOnce();
    if (jr != null) {
        var j = jr.bounds();
        click(j.centerX(), j.centerY());
        toastLog("已尝试点击“宠汪汪”活动入口…");
        sleep(2000);
        var deng = 8;
        for (deng == 8; deng > 0; deng--) {
            toastLog("正在等待宠汪汪活动界面加载\n请稍等" + deng + "秒……");
            sleep(1000);
        }
        mainC();
    } else {
        toastLog("找不到“宠汪汪”活动入口\n重试中……");
        C();
    }
}

function InternetError() {
    if (text("网络开小差啦，请稍后重试～").exists()) {
        toastLog("存在京东提示：\n网络开小差啦，请稍后重试～");
        openJDinSearch();
    }
}


function mainC() {
    var M = text("下一页").findOnce();
    if (M != null) {
        var P = M.bounds();
        click(P.centerX(), P.centerY());
        toastLog("存在“下一页”按钮\n已尝试点击…");
        sleep(2000);
    }
    InternetError();
    var E = text("点击领养").findOnce();
    if (E != null) {
        var e = E.bounds();
        click(e.centerX(), e.centerY());
        toastLog("存在“点击领养”按钮\n已尝试点击…");
        sleep(2000);
    }
    InternetError();

    var G = text("进入小家").findOnce();
    if (G != null) {
        var g = G.bounds();
        click(g.centerX(), g.centerY());
        toastLog("存在“进入小家”按钮\n已尝试点击…");
        sleep(2000);
    }
    InternetError();
    var B = text("跳过引导").findOnce();
    if (B != null) {
        var b = B.bounds();
        click(b.centerX(), b.centerY());
        toastLog("存在“跳过引导”按钮\n已尝试点击…");
        sleep(2000);
    }
    InternetError();
    var lq = text("去领取").findOnce();
    if (lq != null) {
        var lqa = lq.bounds();
        click(lqa.centerX(), lqa.centerY());
        toastLog("存在“去领取”按钮\n已尝试点击");
        sleep(2000);
    }
    var jx = text("继续领水滴").findOnce();
    if (jx != null) {
        var jxa = jx.bounds();
        click(jxa.centerX(), jxa.centerY());
        toastLog("存在“继续领水滴”按钮\n已尝试点击");
        sleep(2000);
    }

    var jbp = text("聚宝盆来了").findOnce();
    if (jbp != null) {
        var gb = text("close-btn-1").findOnce();
        if (gb != null) {
            var jbpa = gb.bounds();
            click(jbpa.centerX(), jbpa.centerY());
            toastLog("存在“聚宝盆来了”弹窗\n尝试关闭…");
            sleep(2000);
        }
    }
    WY();

    function WY() {
        var While = 1;
        //这个while可以完成喂养狗狗任务，直到狗粮不足或进食中
        while (While == 1) {
            var A = text("dog-food-icon").findOnce();
            if (A != null) {
                var B = A.bounds();
                click(B.centerX(), B.centerY());
                toastLog("已找到“喂养”按钮\n尝试点击…");
                sleep(2000);
                if (text("做任务领狗粮").exists()) {
                    var S = className("android.widget.Image").text("pop_close_btn").findOnce();
                    if (S != null) {
                        var s = S.parent().bounds();
                        click(s.centerX(), s.centerY());
                        toastLog("已尝试关闭“做任务领狗粮”蒙版");
                        sleep(1000);
                    }
                }
                if (text("请选择狗粮克数").findOnce() != null) {
                    var C = text("喂养").findOnce();
                    if (C != null) {
                        var c = C.bounds();
                        click(c.centerX(), c.centerY());
                        toastLog("已找到并尝试点击“喂养”按钮");
                        sleep(1000);
                        if (text("您的宠物正在进食中,请稍后再喂食").exists()) {
                            var Aa = text("close-btn-1").findOnce();
                            if (Aa != null) {
                                var Ab = Aa.bounds();
                                click(Ab.centerX(), Ab.centerY());
                                toastLog("检测到您的宠物正在进食中，已尝试关闭喂养弹窗");
                                var While = 0;
                            }
                        }
                        sleep(1000);
                        if (text("您的宠物正在进食中,请稍后再喂食").exists()) {
                            var Aa = text("close-btn-1").findOnce();
                            if (Aa != null) {
                                var Ab = Aa.bounds();
                                click(Ab.centerX(), Ab.centerY());
                                toastLog("检测到您的宠物正在进食中，已尝试关闭喂养弹窗");
                                var While = 0;
                            }
                        }
                        sleep(1000);
                    }
                } else if (textContains("请赚取足够狗粮后再来喂养").findOnce() != null) {
                    //停止点击喂养按钮
                    toastLog("检测到狗粮不足，停止喂养");
                    var While = 0;
                }
            }
        }
    }
    sleep(1000);
    var lgl = text("linggouliang").findOnce();
    if (lgl != null) {
        var lgla = lgl.bounds();
        click(lgla.centerX(), lgla.centerY());
        toastLog("已找到“领狗粮”按钮\n尝试点击…");
        sleep(2000);
    } else {
        toastLog("未找到“领狗粮按钮”等待两秒重试");
        sleep(2000);
        var lgl = text("linggouliang").findOnce();
        if (lgl != null) {
            var lgla = lgl.bounds();
            click(lgla.centerX(), lgla.centerY());
            toastLog("已找到“领狗粮”按钮\n尝试点击…");
            sleep(2000);
        } else {
            toastLog("未发现“领狗粮”按钮");
        }
    }
    var zrw = text("做任务领狗粮").findOnce();
    if (zrw != null) {
        toastLog("已处于“做任务领狗粮”界面")
        var qd = text("领取").findOnce();
        if (qd != null) {
            var qda = qd.bounds();
            click(qda.centerX(), qda.centerY());
            toastLog("存在“领取”按钮\n已尝试点击…");
            sleep(2000);
        }

        var hd3 = "关注店铺（10/10）";
        if (textContains("关注店铺").exists()) {
            context_xH = 1;
            while (context_xH == 1) {
                var D = textContains("关注店铺").findOnce();
                if (D != null) {
                    toastLog("已找到“关注店铺”");
                    var AO = D.parent();
                    var B = AO.children();
                    var H = B[1].text();
                    if (H == hd3) {
                        toastLog(H);
                        context_xH = 0;
                    } else {
                        toastLog(H);
                        var AB = B[3].bounds();
                        click(AB.centerX(), AB.centerY());
                        toastLog("正在完成关注店铺任务\n" + H)
                        sleep(3000);
                        //完成关注店铺任务
                        var While = 1;
                        while (While == 1) {
                            sleep(2000);
                            if (id("fd").findOnce() != null) {
                                if (id("fd").findOnce().text() == "关注店铺任务") {
                                    var CC = text("已关注").find().length;
                                    var A = text("进店并关注").find();
                                    if (CC > 5) {
                                        swipe(width / 2, height / 2, width / 2, 0, 1000);
                                    }
                                    if (A.length != 0) {
                                        var A = text("进店并关注").find();
                                        toastLog("需要关注的店铺数量剩余：" + A.length + "个\n当前已关注" + CC + "个店铺");
                                        var B = A[0].bounds();
                                        click(B.centerX(), B.centerY());
                                        var deng = 5;
                                        for (deng == 5; deng > 0; deng--) {
                                            toastLog("已尝试点击进入店铺\n" + deng + "秒后本店铺浏览完成\n剩余" + A.length + "个店铺未浏览");
                                            sleep(1500);
                                        }
                                        Justback();
                                    } else if (text("已关注").find().length == 10) {
                                        toastLog("已关注全部10个店铺");
                                        var While = 0;
                                    }
                                }
                            } else {
                                if (id("fd").findOnce() != null) {
                                    if (id("fd").findOnce().text() == "宠汪汪") {
                                        if (text("做任务领狗粮").exists()) {
                                            var While = 0;
                                            toastLog("处于“做任务领狗粮”界面未进入关注店铺中，尝试进入……");
                                        }
                                    } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity") {
                                        //上面的返回来处理店铺弹窗后这里再次返回
                                        toastLog("当前未返回关注店铺界面\n尝试返回中……");
                                        Justback();
                                    }
                                } else if (currentActivity() == "com.jd.lib.jshop.jshop.JshopMainShopActivity") {
                                    //上面的返回来处理店铺弹窗后这里再次返回
                                    toastLog("当前未返回关注店铺界面\n尝试返回中……");
                                    Justback();
                                }
                            }
                        }
                        sleep(2000);
                        if (id("fd").findOnce() != null) {
                            if (id("fd").findOnce().text() == "关注店铺任务") {
                                //循环结束即任务完成返回
                                Justback();
                                toastLog("处于“关注店铺任务”界面\n尝试返回……");
                                sleep(2000);
                            } else if (id("fd").findOnce().text() == "宠汪汪") {
                                if (text("做任务领狗粮").exists()) {
                                    toastLog("已处于“做任务领狗粮”界面");
                                } else {
                                    toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                    var ZX = text("linggouliang").findOnce();
                                    if (ZX != null) {
                                        var Zx = ZX.bounds();
                                        click(Zx.centerX(), Zx.centerY());
                                        sleep(2000);
                                    } else {
                                        toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                        sleep(2000);
                                    }
                                }
                            }
                        } else {
                            toastLog("正在完成“关注店铺”任务\n但没有找到顶栏标题\n重试中……");
                            sleep(2000);
                        }
                    }
                } else {
                    toastLog("未找到“关注店铺”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“关注店铺”");
                    context_xH = 0;
                }
            }
        } //完成“关注店铺”任务
        else {
            toastLog("未找到“关注店铺”重试中……")
            mainC();
            toastLog("跳过! 未找到“关注店铺”");
            context_xH = 0;
        }
        sleep(2000);
        //在屏幕上滑动两个控件的距离
        var G = textContains("关注店铺").findOnce();
        if (G != null) {
            var G = G.parent().bounds();
            log("已找到“关注店铺”其高度为" + G.height());
        }
        var A = text("renwu_bg").findOnce();
        if (A != null) {
            var A = A.bounds();
            log("已找到“做任务领狗粮”\n范围高度中点为：" + A.centerY());

            swipe(A.centerX(), A.centerY(), A.centerX(), A.centerY() - G.height() * 2, 500);
            toastLog("已尝试滑动两个控件的距离");
            sleep(1000);
        }
        //开始完成逛逛会场任务
        var rw = "逛逛会场（4/4）";
        if (textContains("逛逛会场").exists()) {
            context_xH = 1;
            while (context_xH == 1) {
                var D = textContains("逛逛会场").findOnce();
                if (D != null) {
                    toastLog("已找到“逛逛会场”");
                    var AO = D.parent();
                    var B = AO.children();
                    var H = B[1].text();
                    if (H == rw) {
                        toastLog(H);
                        context_xH = 0;
                    } else {
                        toastLog(H);
                        var AB = B[3].bounds();
                        click(AB.centerX(), AB.centerY());
                        sleep(2000);
                        if (id("fd").findOnce() != null) {
                            if (id("fd").findOnce().text() != "宠汪汪") {
                                var deng = 5;
                                for (deng == 5; deng > 0; deng--) {
                                    toastLog("正在完成逛逛会场任务\n" + H + "\n剩余" + deng + "秒……");
                                    sleep(2000);
                                }
                                Justback();
                                sleep(1000);
                                if (id("fd").findOnce() != null) {
                                    if (id("fd").findOnce().text() == "宠汪汪") {
                                        if (text("做任务领狗粮").exists()) {
                                            toastLog("已处于“做任务领狗粮”界面");
                                        } else {
                                            toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                            var ZX = text("linggouliang").findOnce();
                                            if (ZX != null) {
                                                var Zx = ZX.bounds();
                                                click(Zx.centerX(), Zx.centerY());
                                                sleep(2000);
                                            } else {
                                                toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                                sleep(2000);
                                            }
                                        }
                                    }
                                } else {
                                    toastLog("未找到顶栏标题\n等待加载重试中……");
                                    sleep(2000);
                                }
                            } else if (id("fd").findOnce().text() == "宠汪汪") {
                                if (text("做任务领狗粮").exists()) {
                                    toastLog("已处于“做任务领狗粮”界面");
                                } else {
                                    toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                    var ZX = text("linggouliang").findOnce();
                                    if (ZX != null) {
                                        var Zx = ZX.bounds();
                                        click(Zx.centerX(), Zx.centerY());
                                        sleep(2000);
                                    } else {
                                        toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                        sleep(2000);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    toastLog("未找到“逛逛会场”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“逛逛会场”");
                    context_xH = 0;
                }
            }
        } else {
            toastLog("未找到“逛逛会场”重试中……")
            mainC();
            toastLog("跳过! 未找到“逛逛会场”");
            context_xH = 0;
        } //“逛逛会场”任务完成
        sleep(2000);
        //在屏幕上滑动两个控件的距离
        var G = textContains("关注店铺").findOnce();
        if (G != null) {
            var G = G.parent().bounds();
            log("已找到“关注店铺”其高度为" + G.height());
        }
        var A = text("renwu_bg").findOnce();
        if (A != null) {
            var A = A.bounds();
            log("已找到“做任务领狗粮”\n范围高度中点为：" + A.centerY());

            swipe(A.centerX(), A.centerY(), A.centerX(), A.centerY() - G.height() * 2, 500);
            toastLog("已尝试滑动两个控件的距离");
            sleep(1000);
        }
        //开始完成关注商品任务
        var rw = "关注商品（10/10）";
        if (textContains("关注商品").exists()) {
            context_xH = 1;

            while (context_xH == 1) {
                var D = textContains("关注商品").findOnce();
                if (D != null) {
                    toastLog("已找到“关注商品”");
                    var AO = D.parent();
                    var B = AO.children();
                    var H = B[1].text();
                    if (H == rw) {
                        toastLog(H);
                        context_xH = 0;
                    } else {
                        toastLog(H);
                        var AB = B[3].bounds();
                        click(AB.centerX(), AB.centerY());
                        sleep(2000);
                        if (currentActivity() == "com.jd.lib.productdetail.ProductDetailActivity") {
                            var deng = 5;
                            for (deng == 5; deng > 0; deng--) {
                                toastLog("正在完成关注商品任务\n" + H + "\n剩余" + deng + "秒……");
                                sleep(2000);
                            }
                            Justback();
                            sleep(1000);
                            if (id("fd").findOnce() != null) {
                                if (id("fd").findOnce().text() == "宠汪汪") {
                                    if (text("做任务领狗粮").exists()) {
                                        toastLog("已返回“做任务领狗粮”界面");
                                    }
                                }
                            } else {
                                toastLog("关注商品任务\n没有找到顶栏标题");
                                sleep(2000);
                            }
                        } else if (id("fd").findOnce().text() != "宠汪汪") {
                            var deng = 5;
                            for (deng == 5; deng > 0; deng--) {
                                toastLog("正在完成关注商品任务\n" + H + "\n剩余" + deng + "秒……");
                                sleep(2000);
                            }
                            Justback();
                            sleep(1000);
                        } else if (id("fd").findOnce().text() == "宠汪汪") {
                            toastLog("还处于“做任务领狗粮”界面\n继续任务……");
                        }
                    }
                } else {
                    toastLog("未找到“关注商品”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“关注商品”");
                    context_xH = 0;
                }
            }
        } //“关注商品”任务完成
        else {
            toastLog("未找到“关注商品”重试中……")
            mainC();
            toastLog("跳过! 未找到“关注商品”");
            context_xH = 0;
        }
        sleep(2000);
        //在屏幕上滑动两个控件的距离
        var G = textContains("关注店铺").findOnce();
        if (G != null) {
            var G = G.parent().bounds();
            log("已找到“关注店铺”其高度为" + G.height());
        }
        var A = text("renwu_bg").findOnce();
        if (A != null) {
            var A = A.bounds();
            log("已找到“做任务领狗粮”\n范围高度中点为：" + A.centerY());

            swipe(A.centerX(), A.centerY(), A.centerX(), A.centerY() - G.height() * 2, 500);
            toastLog("已尝试滑动两个控件的距离");
            sleep(1000);
        }
        //开始完成关注频道任务
        var hd3 = "关注频道（5/5）";
        if (textContains("关注频道").exists()) {
            context_xH = 1;

            while (context_xH == 1) {
                var D = textContains("关注频道").findOnce();
                if (D != null) {
                    toastLog("已找到“关注频道”");
                    var AO = D.parent();
                    var B = AO.children();
                    var H = B[1].text();
                    if (H == hd3) {
                        toastLog(H);
                        context_xH = 0;
                    } else {
                        toastLog(H);
                        var AB = B[3].bounds();
                        click(AB.centerX(), AB.centerY());
                        toastLog("正在完成关注频道任务\n" + H)
                        sleep(3000);
                        //完成关注店铺任务
                        var While = 1;
                        while (While == 1) {
                            sleep(2000);
                            if (id("fd").findOnce().text() == "关注频道任务") {
                                var CC = text("已关注").find().length;
                                var A = text("进入并关注").find();
                                if (CC > 3) {
                                    swipe(width / 2, height / 2, width / 2, 0, 1000);
                                }
                                if (A.length != 0) {
                                    var A = text("进入并关注").find();
                                    if (A.nonEmpty() == true) {
                                        toastLog("需要关注的频道数量剩余：" + A.length + "个\n当前已关注" + CC + "个频道");
                                        var B = A[0].bounds();
                                        click(B.centerX(), B.centerY());
                                        var deng = 5;
                                        for (deng == 5; deng > 0; deng--) {
                                            toastLog("已尝试点击进入频道\n" + deng + "秒后本频道浏览完成\n剩余" + A.length + "个频道未浏览");
                                            sleep(1500);
                                        }
                                        Justback();
                                    } else {
                                        toastLog("进入并关注的Find是空的");
                                        sleep(2000);
                                    }
                                } else if (text("已关注").find().length == 5) {
                                    toastLog("已关注全部5个频道");
                                    var While = 0;
                                }
                            } else {
                                if (id("fd").findOnce() != null) {
                                    if (id("fd").findOnce().text() == "宠汪汪") {
                                        if (text("做任务领狗粮").exists()) {
                                            var While = 0;
                                            toastLog("处于“做任务领狗粮”界面未进入关注频道任务中，尝试进入……");
                                        }
                                    } else {
                                        toastLog("尝试返回到任务界面中……");
                                        Justback();
                                        sleep(2000);
                                    }
                                } else {
                                    toastLog("尝试返回到任务界面中……");
                                    Justback();
                                    sleep(2000);
                                }
                            }
                        }
                        sleep(2000);
                        if (id("fd").findOnce() != null) {
                            if (id("fd").findOnce().text() == "关注频道任务") {
                                //循环结束即任务完成返回
                                Justback();
                                toastLog("处于“关注频道任务”界面\n尝试返回……");
                                sleep(2000);
                            } else if (id("fd").findOnce().text() == "宠汪汪") {
                                if (text("做任务领狗粮").exists()) {
                                    toastLog("已处于“做任务领狗粮”界面");
                                } else {
                                    toastLog("处于“宠汪汪”界面\n但未发现“做任务领狗粮”\n尝试点击“领狗粮”按钮");
                                    var ZX = text("linggouliang").findOnce();
                                    if (ZX != null) {
                                        var Zx = ZX.bounds();
                                        click(Zx.centerX(), Zx.centerY());
                                        toastLog("已尝试点击“领狗粮”按钮");
                                        sleep(2000);
                                    } else {
                                        toastLog("处于“宠汪汪”界面但未找到“领狗粮”按钮");
                                        sleep(2000);
                                    }
                                }
                            }
                        } else {
                            toastLog("正在完成“关注频道”任务\n但没有找到顶栏标题\n重试中……");
                            sleep(2000);
                        }
                    }
                } else {
                    toastLog("未找到“关注频道”重试中……")
                    mainC();
                    toastLog("跳过! 未找到“关注频道”");
                    context_xH = 0;
                }
            }
        } //完成“关注店铺”任务
        else {
            toastLog("未找到“关注频道”重试中……")
            mainC();
            toastLog("跳过! 未找到“关注频道”");
            context_xH = 0;
        }

        sleep(2000);
        var A = text("pop_close_btn").findOnce();
        if (A != null) {
            var V = A.bounds();
            click(V.centerX(), V.centerY());
            toastLog("已尝试关闭“做任务领狗粮”");
            sleep(2000);
        }
        var A = text("pop_close_btn").findOnce();
        if (A != null) {
            var V = A.bounds();
            click(V.centerX(), V.centerY());
            toastLog("已尝试关闭“做任务领狗粮”");
            sleep(2000);
        }

        WY();
        //开始帮喂汪汪
        var OI = className("android.widget.Image").text("help_icon2").findOnce();
        if (OI != null) {
            var Op = OI.bounds();
            click(Op.centerX(), Op.centerY());
            toastLog("已找到“帮忙喂养按钮”\n尝试点击");
            sleep(2500);
            var m = text("可帮喂").find();
            var l = text("已帮喂").find();
            var ff = text("抢").find();
            if (m.size() > 0) {
                var While = 1;
            } else if (ff.size() > 0) {
                var While = 1;
            } else {
                toastLog("未找到“可喂养”的汪汪\n跳过此任务！");
                var S=className("android.widget.Image").text("pop_close_btn").findOnce();
                if(S!=null){
                    var ss=S.bounds();
                    click(ss.centerX(),ss.centerY());
                    toastLog("已尝试点击关闭蒙版按钮");
                    sleep(2000);
                    }
            }
            while (While == 1) {
                var m = text("可帮喂").find();
                var l = text("已帮喂").find();
                var ff = text("抢").find();
                toastLog("当前还可以帮喂" + m.size() + "个宠物\n当前已帮喂" + l.size() + "个宠物\n当前可抢的狗粮剩余：" + ff.size());
                if (m.nonEmpty() == true) {
                    var g = m[0].parent();
                    var GG = g.children();
                    var ww_title = GG[2].text() + "的汪汪";
                }
                var dian = text("可帮喂").findOnce();
                var dianM = text("抢").findOnce();
        
        function S_Wy_Qiang() {
            if (id("com.jingdong.app.mall:id/fd").findOnce() != null) {
                var a = id("com.jingdong.app.mall:id/fd").findOnce().text();
                if (a == ww_title) {
                    toastLog("正在喂养" + ww_title);
                    sleep(2000);
                    if (className("android.widget.Image").text("bone_ava").findOnce() != null) {
                        var ns = className("android.widget.Image").text("bone_ava").findOnce().bounds();
                        click(ns.centerX(), ns.centerY());
                        toastLog("已尝试点击了“狗粮骨头”");
                        sleep(2000);
                    }
                    if (text("dog-food-icon").findOnce() != null) {
                        var hv = text("dog-food-icon").findOnce().bounds();
                        click(hv.centerX(), hv.centerY());
                        toastLog("已尝试点击“帮TA喂养”按钮");
                        sleep(2000);
                        if (className("android.view.View").text("确定").findOnce() != null) {
                            var ed = className("android.view.View").text("确定").findOnce().bounds();
                            click(ed.centerX(), ed.centerY());
                            toastLog("已尝试点击“确定帮TA喂养按钮”");
                            sleep(2000);

                        }
                        Justback();
                        sleep(2000);
                    } else {
                        toastLog("处于“喂养" + ww_title + "”界面\n但未发现喂养按钮\n返回上一级界面...");
                        Justback();
                        sleep(2000);
                    }
                }
            } else {
                sleep(2000);
                if (id("com.jingdong.app.mall:id/fd").findOnce() != null) {
                    var a = id("com.jingdong.app.mall:id/fd").findOnce().text();
                    if (a == ww_title) {
                        toastLog("正在喂养" + ww_title);
                        sleep(2000);
                        if (className("android.widget.Image").text("bone_ava").findOnce() != null) {
                            var ns = className("android.widget.Image").text("bone_ava").findOnce().bounds();
                            click(ns.centerX(), ns.centerY());
                            toastLog("已尝试点击了“狗粮骨头”");
                            sleep(2000);
                        }
                        if (text("dog-food-icon").findOnce() != null) {
                            var hv = text("dog-food-icon").findOnce().bounds();
                            click(hv.centerX(), hv.centerY());
                            toastLog("已尝试点击“帮TA喂养”按钮");
                            sleep(2000);
                            if (className("android.view.View").text("确定").findOnce() != null) {
                                var ed = className("android.view.View").text("确定").findOnce().bounds();
                                click(ed.centerX(), ed.centerY());
                                toastLog("已尝试点击“确定帮TA喂养按钮”");
                                sleep(2000);
                            }
                            Justback();
                            sleep(2000);
                        } else {
                            toastLog("处于“喂养" + ww_title + "”界面\n但未发现喂养按钮\n返回上一级界面...");
                            Justback();
                            sleep(2000);
                        }
                    } else if (a == "宠汪汪") {
                        toastLog("还处于“宠汪汪”界面\n继续任务…");
                    }
                } else {
                    toastLog("没有找到顶栏标题\n跳过此任务");
                    var While = 0;
                }
            }
        }
                if (dian != null) {
                    var fw = dian.bounds();
                    click(fw.centerX(), fw.centerY());
                    toastLog("已点击“可帮喂”按钮\n准备帮喂中……");
                    sleep(3000);
                    S_Wy_Qiang();
                } else if (dianM != null) {
                    var fg = dianM.bounds();
                    click(fg.centerX(), fg.centerY());
                    toastLog("已点击“抢”按钮\n准备抢狗粮中……");
                    sleep(3000);
                    if (className("android.widget.Image").text("bone_ava").findOnce() != null) {
                        var ns = className("android.widget.Image").text("bone_ava").findOnce().bounds();
                        click(ns.centerX(), ns.centerY());
                        toastLog("已尝试点击了“狗粮骨头”");
                        sleep(2000);
                    }
                    Justback();
                    sleep(2000);
                } else {
                    toastLog("已找不到“可帮喂”按钮");
                    var While = 0;
                }
            }
        } else {
            toastLog("未找到“帮忙喂养”按钮\n跳过此任务！");
        }
    }
}

firstD();
function firstD() {
    if (context_Manualstate == 1) {
        toastLog("已手动模式运行脚本");
        var options = ["等待20秒", "等待30秒", "等待50秒", "等待60秒", "等待10秒"]
        var i = dialogs.select("🔧以“手动模式”运行脚本\n\n接下来您需要在提示出现后自行打开京东APP至活动页”\n\n请选择脚本等待您打开京东的时间", options);
        if (i >= 0) {
            toast("您选择的是" + options[i]);
        } else if (i < 0) {
            toastLog("您取消了选择");
            dialogs_js();
            firstD();
        }
        if (i == 0) {
            //等待20秒
            var deng = 20;
        } else if (i == 1) {
            //等待30秒
            var deng = 30;
        } else if (i == 2) {
            //等待50秒
            var deng = 50;
        } else if (i == 3) {
            //等待60秒
            var deng = 60;
        } else if (i == 4) {
            //等待10秒
            var deng = 10;
        }
        for (deng = deng; deng > 0; deng--) {
            toastLog("请打开京东至宠汪汪的主界面\n剩余" + deng + "秒后运行脚本...");
            sleep(1111);
        }
        mainC();
    } else {
        openJDinSearch();
    }
}
dialogs.alert("脚本已运行完成");
log("脚本已运行完成");
exit();