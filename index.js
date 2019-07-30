const font = new FontFace('HuXiaoBoKuHei', 'local("HuXiaoBoKuHei"),local("HuXiaoBo_KuHei"),url("https://st0.dancf.com/csc/3/fonts/206/20180421-104322-53.woff"),url("https://st0.dancf.com/csc/3/fonts/206/20180421-104322-52.ttf")');
const status = document.getElementById('status');
status.innerHTML = 'Loading';
font.load(null, 10000).then(() => {
    console.log('loaded');
    status.innerHTML = 'Loaded';
});
