const _0xbce39=_0xc07b;(function(_0x33740a,_0x5e29dd){const _0x52b146=_0xc07b,_0x455aa=_0x33740a();while(!![]){try{const _0x1781ac=parseInt(_0x52b146(0xec))/0x1+parseInt(_0x52b146(0x10c))/0x2+parseInt(_0x52b146(0xc4))/0x3*(-parseInt(_0x52b146(0xbf))/0x4)+-parseInt(_0x52b146(0xf1))/0x5+parseInt(_0x52b146(0x114))/0x6*(parseInt(_0x52b146(0xe9))/0x7)+parseInt(_0x52b146(0x125))/0x8*(-parseInt(_0x52b146(0x11c))/0x9)+-parseInt(_0x52b146(0xdd))/0xa*(parseInt(_0x52b146(0xe1))/0xb);if(_0x1781ac===_0x5e29dd)break;else _0x455aa['push'](_0x455aa['shift']());}catch(_0x44b5be){_0x455aa['push'](_0x455aa['shift']());}}}(_0x4a90,0x6c4c3));let score=0x0,timerInSeconds=0x0,timerStarted=![],correctAnswers=[];function startTimer(){!timerStarted&&(timerInterval=setInterval(()=>{const _0x5b5b59=_0xc07b;timerInSeconds++,document[_0x5b5b59(0xcd)](_0x5b5b59(0xdc))[_0x5b5b59(0xc1)]=formatTime(timerInSeconds);},0x3e8),timerStarted=!![]);}function formatTime(_0x4dcba2){const _0x36d88f=_0xc07b,_0x4b82dd=Math[_0x36d88f(0xd4)](_0x4dcba2/0x3c),_0x57462d=_0x4dcba2%0x3c;return''+(_0x4b82dd<0xa?'0':'')+_0x4b82dd+':'+(_0x57462d<0xa?'0':'')+_0x57462d;}function normalizeInput(_0x29dd9d){const _0x5bad46=_0xc07b;return _0x29dd9d[_0x5bad46(0xcb)](/\s+/g,'\x20')[_0x5bad46(0xb8)]()[_0x5bad46(0xe4)]();}function check1(){const _0xf077ef=_0xc07b;let _0x2d8669=normalizeInput(document[_0xf077ef(0xcd)]('q1')[_0xf077ef(0x103)]);_0x2d8669==='hyper\x20text\x20markup\x20language'||_0x2d8669==='hypertext\x20markup\x20language'?(alert('Correct!'),score++,startTimer(),document['getElementById']('submit-q1')['disabled']=!![],correctAnswers['push']('Q1')):alert('Incorrect.'),gameOver();}function check2(){const _0x550014=_0xc07b;let _0x3b5295=normalizeInput(document[_0x550014(0xcd)]('q2')[_0x550014(0x103)]);_0x3b5295===_0x550014(0xfe)||_0x3b5295===_0x550014(0xd5)?(alert(_0x550014(0x126)),score++,startTimer(),document[_0x550014(0xcd)](_0x550014(0xaf))[_0x550014(0xc2)]=!![],correctAnswers['push']('Q2')):alert('Incorrect.'),gameOver();}function check3(){const _0x299e44=_0xc07b;let _0x4ea1a9=normalizeInput(document[_0x299e44(0xcd)]('q3')[_0x299e44(0x103)]);_0x4ea1a9===_0x299e44(0xcf)?(alert(_0x299e44(0x126)),score++,startTimer(),document['getElementById'](_0x299e44(0xcc))['disabled']=!![],correctAnswers['push']('Q3')):alert(_0x299e44(0xf0)),gameOver();}function check4(){const _0x5b5f5b=_0xc07b;let _0x475ce3=normalizeInput(document[_0x5b5f5b(0xcd)]('q4')['value'])[_0x5b5f5b(0xcb)](/\s+/g,'');_0x475ce3==='h1{background-color:blue;}'?(alert(_0x5b5f5b(0x126)),score++,startTimer(),document[_0x5b5f5b(0xcd)](_0x5b5f5b(0xb6))[_0x5b5f5b(0xc2)]=!![],correctAnswers['push']('Q4')):alert(_0x5b5f5b(0xf0)),gameOver();}function check5(){const _0x757395=_0xc07b;let _0x2e151c=normalizeInput(document[_0x757395(0xcd)]('q5')[_0x757395(0x103)]);_0x2e151c==='<head>'?(alert('Correct!'),score++,startTimer(),document[_0x757395(0xcd)](_0x757395(0xc3))['disabled']=!![],correctAnswers[_0x757395(0xb2)]('Q5')):alert(_0x757395(0xf0)),gameOver();}function _0xc07b(_0x3671d8,_0x20c9a4){const _0x4a900f=_0x4a90();return _0xc07b=function(_0xc07b9a,_0xe02c6){_0xc07b9a=_0xc07b9a-0xae;let _0x15aeec=_0x4a900f[_0xc07b9a];return _0x15aeec;},_0xc07b(_0x3671d8,_0x20c9a4);}function check6(){const _0x2d03f7=_0xc07b;let _0x4079c8=normalizeInput(document[_0x2d03f7(0xcd)]('q6')[_0x2d03f7(0x103)]);_0x4079c8==='font-size'?(alert(_0x2d03f7(0x126)),score++,startTimer(),document[_0x2d03f7(0xcd)]('submit-q6')[_0x2d03f7(0xc2)]=!![],correctAnswers['push']('Q6')):alert(_0x2d03f7(0xf0)),gameOver();}function check7(){const _0x4f53e6=_0xc07b;let _0x1ca7c1=normalizeInput(document[_0x4f53e6(0xe2)](_0x4f53e6(0xc8))?.['value']);_0x1ca7c1===_0x4f53e6(0xda)?(alert(_0x4f53e6(0x126)),score++,startTimer(),document[_0x4f53e6(0xcd)](_0x4f53e6(0xee))[_0x4f53e6(0xc2)]=!![],correctAnswers['push']('Q7')):alert(_0x4f53e6(0x101)),gameOver();}function check8(){const _0x225771=_0xc07b;let _0x484160=normalizeInput(document[_0x225771(0xcd)]('q8')[_0x225771(0x103)]);_0x484160===_0x225771(0x11a)?(alert('Correct!'),score++,startTimer(),document[_0x225771(0xcd)](_0x225771(0xbc))[_0x225771(0xc2)]=!![],correctAnswers['push']('Q8')):alert(_0x225771(0xf0)),gameOver();}function check9(){const _0x2bcbc4=_0xc07b;let _0x13c7ed=normalizeInput(document[_0x2bcbc4(0xcd)]('q9')[_0x2bcbc4(0x103)]);_0x13c7ed==='list-style-type:none;'||_0x13c7ed[_0x2bcbc4(0x113)](_0x2bcbc4(0xc0))?(alert(_0x2bcbc4(0x126)),score++,startTimer(),document['getElementById']('submit-q9')['disabled']=!![],correctAnswers[_0x2bcbc4(0xb2)]('Q9')):alert(_0x2bcbc4(0xf0)),gameOver();}function check10(){const _0x282640=_0xc07b;let _0x8ebfa5=normalizeInput(document[_0x282640(0xcd)](_0x282640(0xf8))[_0x282640(0x103)]);_0x8ebfa5[_0x282640(0x113)](',')||_0x8ebfa5[_0x282640(0x113)]('.')?(alert(_0x282640(0x126)),score++,startTimer(),document[_0x282640(0xcd)]('submit-q10')['disabled']=!![],correctAnswers[_0x282640(0xb2)](_0x282640(0x10f))):alert('Incorrect.\x20Group\x20selectors\x20by\x20separating\x20them\x20with\x20commas.'),gameOver();}function check11(){const _0x38f2e4=_0xc07b;let _0x4eeb9f=normalizeInput(document[_0x38f2e4(0xcd)](_0x38f2e4(0xae))[_0x38f2e4(0x103)]);_0x4eeb9f===_0x38f2e4(0x10b)?(alert(_0x38f2e4(0x126)),score++,startTimer(),document[_0x38f2e4(0xcd)](_0x38f2e4(0xb3))[_0x38f2e4(0xc2)]=!![],correctAnswers['push'](_0x38f2e4(0xe8))):alert(_0x38f2e4(0xd6)),gameOver();}function check12(){const _0x18e238=_0xc07b;let _0x59bbe2=normalizeInput(document[_0x18e238(0xcd)](_0x18e238(0x111))['value']);_0x59bbe2[_0x18e238(0xc7)]('/*')&&_0x59bbe2[_0x18e238(0xd3)]('*/')?(alert(_0x18e238(0x126)),score++,startTimer(),document[_0x18e238(0xcd)](_0x18e238(0xf6))[_0x18e238(0xc2)]=!![],correctAnswers[_0x18e238(0xb2)](_0x18e238(0x11f))):alert(_0x18e238(0xde)),gameOver();}function check13(){const _0x424a0e=_0xc07b;let _0x4dea71=normalizeInput(document['getElementById']('q13')[_0x424a0e(0x103)]);_0x4dea71===_0x424a0e(0xf2)?(alert('Correct!'),score++,startTimer(),document[_0x424a0e(0xcd)](_0x424a0e(0xed))[_0x424a0e(0xc2)]=!![],correctAnswers[_0x424a0e(0xb2)](_0x424a0e(0x11d))):alert(_0x424a0e(0xf0)),gameOver();}function check14(){const _0x2f69ff=_0xc07b;let _0x24034c=normalizeInput(document['getElementById']('q14')['value']);_0x24034c===_0x2f69ff(0x10d)?(alert(_0x2f69ff(0x126)),score++,startTimer(),document['getElementById'](_0x2f69ff(0x102))[_0x2f69ff(0xc2)]=!![],correctAnswers[_0x2f69ff(0xb2)](_0x2f69ff(0xbd))):alert(_0x2f69ff(0xf0)),gameOver();}function check15(){const _0x39e0c1=_0xc07b;let _0x505fa1=normalizeInput(document['getElementById'](_0x39e0c1(0xdb))[_0x39e0c1(0x103)]);_0x505fa1===_0x39e0c1(0xb9)||_0x505fa1==='demo'?(alert(_0x39e0c1(0x126)),score++,startTimer(),document['getElementById']('submit-q15')['disabled']=!![],correctAnswers[_0x39e0c1(0xb2)]('Q15')):alert(_0x39e0c1(0xf0)),gameOver();}function check16(){const _0x35969d=_0xc07b;let _0x162ecb=normalizeInput(document[_0x35969d(0xcd)]('q16')[_0x35969d(0x103)]);_0x162ecb===_0x35969d(0xfa)||_0x162ecb===_0x35969d(0xba)?(alert('Correct!'),score++,startTimer(),document['getElementById'](_0x35969d(0xf9))[_0x35969d(0xc2)]=!![],correctAnswers[_0x35969d(0xb2)](_0x35969d(0xd9))):alert('Incorrect.'),gameOver();}function check17(){const _0x45203d=_0xc07b;let _0xe7da39=normalizeInput(document[_0x45203d(0xcd)](_0x45203d(0xbb))[_0x45203d(0x103)]);_0xe7da39[_0x45203d(0x113)]('alternative\x20text')||_0xe7da39[_0x45203d(0x113)](_0x45203d(0x115))?(alert('Correct!'),score++,startTimer(),document['getElementById']('submit-q17')[_0x45203d(0xc2)]=!![],correctAnswers[_0x45203d(0xb2)](_0x45203d(0x118))):alert(_0x45203d(0xf0)),gameOver();}function check18(){const _0x721923=_0xc07b;let _0x24ea85=normalizeInput(document[_0x721923(0xcd)](_0x721923(0x11b))[_0x721923(0x103)]);_0x24ea85[_0x721923(0x113)](_0x721923(0xf3))||_0x24ea85['includes']('target=\x27_blank\x27')?(alert('Correct!'),score++,startTimer(),document[_0x721923(0xcd)](_0x721923(0xd1))[_0x721923(0xc2)]=!![],correctAnswers[_0x721923(0xb2)](_0x721923(0x112))):alert(_0x721923(0xf0)),gameOver();}function check19(){const _0x4b48a8=_0xc07b;let _0x140e7e=normalizeInput(document[_0x4b48a8(0xe2)](_0x4b48a8(0x124))?.[_0x4b48a8(0x103)]);_0x140e7e===_0x4b48a8(0x117)?(alert(_0x4b48a8(0x126)),score++,startTimer(),document['getElementById'](_0x4b48a8(0xf4))[_0x4b48a8(0xc2)]=!![],correctAnswers['push'](_0x4b48a8(0xb7))):alert('Incorrect.\x20Use\x20\x27flex-direction\x27\x20property\x20with\x20values\x20like\x20\x27row\x27\x20or\x20\x27column\x27\x20to\x20change\x20the\x20direction\x20of\x20flex\x20items.'),gameOver();}function check20(){const _0x25f811=_0xc07b;let _0x2fa48e=normalizeInput(document[_0x25f811(0xcd)](_0x25f811(0x120))['value']);_0x2fa48e==='<p>'||_0x2fa48e==='p'?(alert(_0x25f811(0x126)),score++,startTimer(),document[_0x25f811(0xcd)]('submit-q20')[_0x25f811(0xc2)]=!![],correctAnswers[_0x25f811(0xb2)](_0x25f811(0xef))):alert(_0x25f811(0xe7)),gameOver();}function check21(){const _0x49d60a=_0xc07b;let _0x3b6b14=normalizeInput(document[_0x49d60a(0xcd)](_0x49d60a(0x119))[_0x49d60a(0x103)]);_0x3b6b14==='class=\x22section1\x22'||_0x3b6b14===_0x49d60a(0xe0)?(alert(_0x49d60a(0x126)),score++,startTimer(),document[_0x49d60a(0xcd)](_0x49d60a(0xdf))[_0x49d60a(0xc2)]=!![],correctAnswers[_0x49d60a(0xb2)]('Q21')):alert(_0x49d60a(0xe5)),gameOver();}function check22(){const _0x593e3a=_0xc07b;let _0x2e33b8=normalizeInput(document['getElementById'](_0x593e3a(0x122))[_0x593e3a(0x103)]);_0x2e33b8===_0x593e3a(0xd0)||_0x2e33b8==='text-decoration:\x20none;'?(alert(_0x593e3a(0x126)),score++,startTimer(),document[_0x593e3a(0xcd)]('submit-q22')[_0x593e3a(0xc2)]=!![],correctAnswers[_0x593e3a(0xb2)](_0x593e3a(0x104))):alert('Incorrect.'),gameOver();}function check23(){const _0x579438=_0xc07b;let _0x213ebd=normalizeInput(document['getElementById'](_0x579438(0xe6))[_0x579438(0x103)]);_0x213ebd===_0x579438(0xf5)||_0x213ebd===_0x579438(0x110)?(alert(_0x579438(0x126)),score++,startTimer(),document[_0x579438(0xcd)]('submit-q23')[_0x579438(0xc2)]=!![],correctAnswers[_0x579438(0xb2)](_0x579438(0xce))):alert(_0x579438(0xf0)),gameOver();}function check24(){const _0x511927=_0xc07b;let _0x5b24ca=normalizeInput(document[_0x511927(0xcd)]('q24')['value']);_0x5b24ca===_0x511927(0xd7)?(alert(_0x511927(0x126)),score++,startTimer(),document[_0x511927(0xcd)]('submit-q24')[_0x511927(0xc2)]=!![],correctAnswers['push'](_0x511927(0x105))):alert('Incorrect.'),gameOver();}function check25(){const _0x390398=_0xc07b;let _0x4a25b4=normalizeInput(document[_0x390398(0xcd)]('q25')[_0x390398(0x103)]);_0x4a25b4===_0x390398(0x10e)?(alert(_0x390398(0x126)),score++,startTimer(),document['getElementById'](_0x390398(0xfd))['disabled']=!![],correctAnswers[_0x390398(0xb2)](_0x390398(0xd2))):alert(_0x390398(0xf0)),gameOver();}function check26(){const _0x5d6b09=_0xc07b;let _0x412044=normalizeInput(document[_0x5d6b09(0xcd)](_0x5d6b09(0x121))[_0x5d6b09(0x103)]);_0x412044==='<section>'||_0x412044[_0x5d6b09(0x113)]('section')?(alert(_0x5d6b09(0x126)),score++,startTimer(),document[_0x5d6b09(0xcd)]('submit-q26')[_0x5d6b09(0xc2)]=!![],correctAnswers[_0x5d6b09(0xb2)](_0x5d6b09(0xeb))):alert(_0x5d6b09(0xf0)),gameOver();}function check27(){const _0x1b3514=_0xc07b;let _0x52dd5d=normalizeInput(document[_0x1b3514(0xe2)]('input[name=\x27q27\x27]:checked')?.[_0x1b3514(0x103)]);_0x52dd5d==='flex-wrap:wrap;'||_0x52dd5d==='flex-wrap:\x20wrap;'?(alert(_0x1b3514(0x126)),score++,startTimer(),document[_0x1b3514(0xcd)](_0x1b3514(0xff))[_0x1b3514(0xc2)]=!![],correctAnswers[_0x1b3514(0xb2)](_0x1b3514(0xb5))):alert(_0x1b3514(0xfb)),gameOver();}function check28(){const _0x1431d5=_0xc07b;let _0x5d44e2=normalizeInput(document[_0x1431d5(0xcd)](_0x1431d5(0xb4))[_0x1431d5(0x103)]);_0x5d44e2==='font-weight:bold;'||_0x5d44e2==='font-weight:\x20bold;'?(alert('Correct!'),score++,startTimer(),document[_0x1431d5(0xcd)](_0x1431d5(0x109))['disabled']=!![],correctAnswers[_0x1431d5(0xb2)]('Q28')):alert('Incorrect.'),gameOver();}function check29(){const _0x6f3c66=_0xc07b;let _0x15d718=normalizeInput(document['getElementById'](_0x6f3c66(0x108))['value']);_0x15d718==='<footer>'?(alert('Correct!'),score++,startTimer(),document['getElementById'](_0x6f3c66(0xe3))[_0x6f3c66(0xc2)]=!![],correctAnswers['push'](_0x6f3c66(0x123))):alert('Incorrect.'),gameOver();}function check30(){const _0x1b4b6c=_0xc07b;let _0x57c290=normalizeInput(document['getElementById'](_0x1b4b6c(0x127))['value']);_0x57c290['includes'](_0x1b4b6c(0x11e))?(alert('Correct!'),score++,startTimer(),document['getElementById'](_0x1b4b6c(0xc6))['disabled']=!![],correctAnswers['push'](_0x1b4b6c(0x107))):alert(_0x1b4b6c(0xf0)),gameOver();}function gameOver(){const _0x4dcd84=_0xc07b;document['getElementById'](_0x4dcd84(0xc5))[_0x4dcd84(0x103)]=score,document['getElementById'](_0x4dcd84(0x100))['textContent']=_0x4dcd84(0xf7)+score;let _0x109189=formatTime(timerInSeconds);document['getElementById'](_0x4dcd84(0x116))[_0x4dcd84(0x103)]=_0x109189,document['getElementById'](_0x4dcd84(0xea))['value']=correctAnswers[_0x4dcd84(0xc9)](',\x20');}function _0x4a90(){const _0x4d07a6=['824MZkZNA','Correct!','q30','q11','submit-q2','click','QUESTIONS','push','submit-q11','q28','Q27','submit-q4','Q19','trim','#demo','list-style:\x20none;','q17','submit-q8','Q14','.btn2','112Wswpiy','square','textContent','disabled','submit-q5','441SFrsSB','score','submit-q30','startsWith','input[name=\x27q7\x27]:checked','join','preventDefault','replace','submit-q3','getElementById','Q23','true','text-decoration:none;','submit-q18','Q25','endsWith','floor','style','Incorrect.\x20The\x20default\x20value\x20of\x20the\x20position\x20property\x20is\x20....','<video>','name','Q16','border:\x201px\x20solid\x20black;','q15','timer-display','40GBPPnU','Incorrect.\x20Comments\x20in\x20CSS\x20are\x20written\x20between\x20/*\x20and\x20*/.','submit-q21','class=\x27section1\x27','259732MTXZdp','querySelector','submit-q29','toLowerCase','Incorrect.\x20The\x20correct\x20answer\x20is\x20\x27class=\x22section1\x22\x27\x20or\x20\x27class=\x27section1\x27\x27.','q23','Incorrect.\x20The\x20correct\x20answer\x20is\x20\x27<p>\x27\x20or\x20\x27p\x27.','Q11','153951KkPUmb','correct-answers','Q26','400411xuqGjZ','submit-q13','submit-q7','Q20','Incorrect.','2900560mZgCbI','margin-left','target=\x22_blank\x22','submit-q19','<input\x20type=\x22checkbox\x22>','submit-q12','Score:\x20','q10','submit-q16','list-style:none;','Incorrect.\x20Use\x20\x27flex-wrap:\x20wrap;\x27\x20to\x20allow\x20flex\x20items\x20to\x20wrap\x20onto\x20multiple\x20lines\x20within\x20a\x20flex\x20container.','submit','submit-q25','<style>','submit-q27','floating-score','Incorrect.\x20Remember\x20to\x20target\x20the\x20border\x20first','submit-q14','value','Q22','Q24','Please\x20enter\x20your\x20name.','Q30','q29','submit-q28','addEventListener','static','358306nGcMww','cascading\x20style\x20sheets','<ol>','Q10','<input\x20type=\x27checkbox\x27>','q12','Q18','includes','228eqtkYy','alt\x20text','timer','flex-direction','Q17','q21','font-family','q18','25605YZhmpw','Q13','box-shadow','Q12','q20','q26','q22','Q29','input[name=\x27q19\x27]:checked'];_0x4a90=function(){return _0x4d07a6;};return _0x4a90();}document[_0xbce39(0xe2)](_0xbce39(0xbe))[_0xbce39(0x10a)](_0xbce39(0xb0),function(_0x1b05f0){const _0x35523b=_0xbce39;_0x1b05f0[_0x35523b(0xca)]();if(document[_0x35523b(0xcd)](_0x35523b(0xd8))[_0x35523b(0x103)][_0x35523b(0xb8)]()===''){alert(_0x35523b(0x106));return;}gameOver(),document['getElementById']('submitForm')['submit']();}),document['getElementById']('QUESTIONS')[_0xbce39(0x10a)](_0xbce39(0xfc),function(_0x336acb){const _0x3b5ed8=_0xbce39;_0x336acb[_0x3b5ed8(0xca)](),gameOver();}),document['getElementById'](_0xbce39(0xb1))['addEventListener']('submit',function(_0x53354a){const _0x3eca34=_0xbce39;_0x53354a[_0x3eca34(0xca)]();});
