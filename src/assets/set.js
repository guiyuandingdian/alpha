/**
 * js帮助类
 */
const  jsHelper = {
    /**
     * 去掉time 的 T
     * @param time 日期时间对象
     * @returns 处理后的日期时间
     */
    convertTime: function (time) {
        if (!time || time == null || time.length == 0) {
            return " ";
        }
        //替换time中的T
        time = time.replace(/T/g, ' ');
        //如果包含 0001-01-01  则为空数据
        if (time.search("0001-01-01") != -1) {
            time = "";
        }
        return time;
    },

    /**
     * 获取当前时间 格式(yyyy-MM-dd HH:mm:ss)
     * @returns
     */
    getNowTime: function () {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    },

    /** localStorage 存储 */
    localStorage: {
        /**
         * 设置 localStorage
         * @param key 键
         * @param value 值
         * @param hours 有效期 (单位:小时)
         */
        set: function (key, value, hours) {
            //设置过期时间
            var curDate = new Date();
            var endDate = new Date(curDate.setHours(curDate.getHours() + hours));

            var data = { value: value, expirse: endDate.getTime() };
            localStorage.setItem(key, JSON.stringify(data));
        },

        /**
         * 获取 localStorage
         * @param key键
         * @returns 返回数据
         */
        get: function (key) {
            var data = JSON.parse(localStorage.getItem(key));
            if (data !== null) {
                //判断是否过期
                if (data.expirse != null && data.expirse < new Date().getTime()) {
                    localStorage.removeItem(key);//删除
                } else {
                    return data.value;
                }
            }
            return null;
        }
    }
}
export default jsHelper