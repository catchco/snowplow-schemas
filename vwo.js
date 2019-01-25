/**
 * get Visual Website Optimizer cookies
 * @returns {array}
 */
function getVwoTests() {
    var cs = document.cookie.split(/;\s*/), vwoCookies = [], i;
    for (i = 0; i < cs.length; i++) {
        //check if cookie matches VWO cookie regex
        if (cs[i].match(/^_vis_opt_exp_.*_combi/)) {
            //modify the cookie string to VWO-TESTID-VARIANT and push to array
            vwoCookies.push('vwo-' + cs[i].match(/\d+/g)[0] + '-' + cs[i].slice(-1));
        }
    }
    return vwoCookies;
};