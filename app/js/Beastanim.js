var timer = null;
var nub = 0;
var onoff = true;
var hnav = id('hnav');
var ha = hnav.getElementsByTagName('a');   // 头部导航条a
var close = id('close');
var shoo = id('shopintro');   // 商品的主页面
var footsa = foots.getElementsByTagName('a');
var black = id('black');
var finish = id('finish');
var fit = finish.getElementsByTagName('input');
var wind = id('wind');
var owns = null;
var imgs = null;



ha[0].addEventListener('touchstart',function(){
	lg.style.display = 'block';
})
close.addEventListener('touchstart',function(){
	lg.style.display = 'none';
})

function showAnmi(){   // 动画效果跳转主页
	timer = setInterval(function(){
		removeClass(anmi,'showPage');
		clearInterval(timer)
	},4000)
	fn()
	function fn(){
		//  调用第二个页面的函数
		setTimeout(function(){
			addClass(warp,'showPage');
		},4000)
	 	wrap();  // 点击X恢复主页
	}
}
   
  
function wrap(){   // 主页的所有动画的函数调用
	banner()
	function banner(){
		setInterval (function(){
			nub++;
			if(brli){   // 轮播图的图片位置确认
				for(let i=0;i<brli.length;i++){
					if(nub >= 5){
						nub = -1;
					}
				}
				br.style.transition = '2s linear';
				nub = nub%brli.length;
				br.style.transform = 'translateX('+(-nub*580)+'px'+')';
			}
		},2500)
	}
	showpage(loga,user,warp);  // 点击进入登陆页面
	left_lo()
	function left_lo(){   //  右边侧边导航条的函数
		var box = document.createElement('section');
		if(loll){
			for(let i=0;i<loll.length;i++){
				loll[i].addEventListener('touchstart',function(){
					var h = this.offsetHeight;
					console.log(h)
					if( i>0&& i<5){
						for(let k=0;k<loll.length;k++){
							loll[k].style.height = '40px';
						}
						box.className = 'box';
						this.appendChild(box);
						this.style.height = '300px';
						if(onoff){
							for(let k=0;k<4;k++){
								box.innerHTML += `
									<a href="javascript:;">${jsonM[i].lo_sm[k]}</a>
								`;
							}
							onoff = false;
						}else if(h == 358){
							this.removeChild(box);
							this.style.height = '40px';
						}
					}
				})
				loll[0].addEventListener('touchstart',function(){
					lg.style.display = 'none';
				})
			}
		}
	}
}

useindex()
function useindex(){  // 登录页面的函数调用
	show()
	function show(){  // 手机号码的选择
		sh.addEventListener('touchstart',function(){
			blo.style.display = 'block';
			var blos = blo.getElementsByTagName('li');
			if(blos){
				for(let i=0;i<blos.length;i++){
					blos[i].addEventListener('touchstart',function(){
						blo.style.display = 'none';
						sh.innerText = this.innerText;
					})
				}
			}
		})
	}
	var a = /^1[3|5|8]\d{9}$/;
	var b =/[a-z]|\d{8-15}$/;
	btns.addEventListener('touchstart',function(){
		if(text.value != ''&& a.test(text.value) ){
			if(pass.value != ''&& b.test(pass.value) ){
				u = text.value;
				loga.innerText = u;
				usetitle.innerText = u;
				addClass(own,'showPage');/*登录进去的用户页面*/
				removeClass(user,'showPage');
				alert('登陆成功！')
			}else{
				alert('请输入正确的密码！')
				pass.value = '';
			}
		}else if(text.placeholder =='请输入邮箱'){
			alert('请输入正确的邮箱格式！')
			text.value = '';
		}else{
			alert('请输入正确的手机号码格式！')
			text.value = '';
			pass.value = '';
		}
	})
	showpage(fona[0],warp,own); 
	showpage(rn,warp,user); // 点击用户信息页面回到主页面
	pha[0].addEventListener('touchstart',function(){
		gent.style.display = 'block';
		text.placeholder = '请输入手机号码';
		text.value = '';
		pass.value = '';
	})
	pha[1].addEventListener('touchstart',function(){
		gent.style.display = 'none';
		text.placeholder = '请输入邮箱';
		blo.style.display = 'none';
		text.value = '';
		pass.value = '';
	})
}
shops(lasta,warp,shoo)
shops(fotpa,moreshop,shoo)
//console.log(ba)
function shops(obj,a,b){   // 点击商品，重新出现的页面
	for(let i=0;i<fotpa.length;i++){
		var n = 1;
		obj[i].addEventListener('touchstart',function(){
			addClass(b,'showPage')
			removeClass(a,'showPage')
			showpage(rn,warp,user);
			var ba = this.children[0].value;
			sb.innerHTML = `
				<li>
					<img src="${jsonM[ba].sm_img}"/>
				</li>
			`;
			sf.innerHTML = `
					<h1>${jsonM[ba].sm_text[0].a}</h1>
					<p>${jsonM[ba].sm_text[1].b}</p>
					<p class="price">${jsonM[ba].sm_price}</p>
			`;
			st.innerHTML = `
					<h1>style notes</h1>
					<p>推荐理由</p>
					<p>${jsonM[ba].intro}</p>
			`;
			var sbimg = sb.getElementsByTagName('img');
			hint.innerHTML = `
				<span class="hint_food">
					<img src="${jsonM[ba].sm_img}"/>
				</span>
				<section class="hintprice">
					<h1>${jsonM[ba].sm_text[0].a}</h1>
					<section class="hp">	
						<p>${jsonM[ba].sm_text[1].b}</p>
						<span>${jsonM[ba].sm_price}</span>
					</section>	
					<section class="food_num" id="food_num">
						<input type="button" value="-" id="subst"/>
						<p>${n}</p>
						<input type="button" value="+" id="add"/>
					</section>
				</section>		
			`;
			wind.innerHTML = `
				<p>需支付 : <span id="money">  ${jsonM[ba].sm_price}</span></p>
				<a href="javascript:;" id="ok">提交订单</a>
			`;
			
			var ok = id('ok');
			var fnum = id('food_num');
			var fump = fnum.getElementsByTagName('p');
			var subst = id('subst');
			var add = id('add');
			var money = id('money');
			var ms = money.innerText;
           	var mt = ms.substring(3)*1;
			add.addEventListener('touchstart',function(){
				n++;
				fump[0].innerText = n;
				money.innerText =  '¥ '+mt*n+'.00';
			})
			subst.addEventListener('touchstart',function(){
				n--;
				if(n<=0){
					alert('亲，真的要抛弃我了吗？ ')
					hint.innerHTML = '';
					money.innerText = '¥0.00';
					fit[0].style.background = '#fff';
					ok.style.background = '#b5bfbe';
				}else{
					fump[0].innerText = n;
					money.innerText = '¥ '+mt*n+'.00';
				}
			})
			buy()
			function buy(){  //商品页面
				showpage(leret,warp,shoo)
				fit[0].addEventListener('touchstart',function(){
					nub++;
					if(nub > 1){
						nub = 0;
					}
					if(nub == 0 || money.innerText == '¥0.00'){
						this.style.background = '#fff';
						ok.style.background = '#b5bfbe';
					}else{
						this.style.background = '#597374';
						ok.style.background = '#597374';
					}
				})
				ok.addEventListener('touchstart',function(){
					if(money.innerText != '¥0.00'){
						alert('提交成功！')
						this.style.background = '#164942';
					}else{
						alert('请确认订单信息！')
					}
				})
				showpage(black,warp,order);
			}
			ifuser(footsa[1],shopcar,shoo,user);
			myfood.innerHTML = `
					<li>
						<input type="button"/>
						<span class="liimg" id="liimg"><img src="${jsonM[ba].sm_img}"/></span>
						<span>
							<p id="lititle">${jsonM[ba].sm_text[0].a}</p>
							<p id="lime">${jsonM[ba].sm_text[1].b}</p>
							<p>${jsonM[ba].sm_price}<span id="addnum">×1</span></p>
						</span>
					</li>
			`;
			allmon.innerText = jsonM[ba].sm_price;
			moreshops()
			function moreshops(){   //进入购物车的函数调用
				nub ++;
//				henava[1].addEventListener('touchstart',function(){
//					alert()
//				})
//				ifuser(henava[1],shopcar,moreshop,user);
				myfoodinput[0].addEventListener('touchstart',function(){
					this.value = '✔';
					if(onoff){
						this.value = '✔';
						onoff = false;
					}else{
						this.value = '';
						onoff = true;
					}
					if(this.value){
						finnum.innerText = '('+nub+')';
					}else{
						finnum.innerText = '(0)';
					}
				})
			}
		})
	}
}
ifuser(footsa[0],order,shoo,user);
showpage(hui,warp,moreshop);
showpage(huishop,moreshop,shopcar);
ifuser(newgouwu,shopcar,shoo,user);
ifuser(biglo,shopcar,moreshop,user);
ifuser(indexshop,shopcar,warp,user);

finimon.addEventListener('touchstart',function(){
	console.log(finnum.innerText)
	if(finnum.innerText == '(0)'){
		alert('亲，请选择商品！')
		this.style.background = '#b5bfbe';
	}else{
		this.style.background = '#164942';
		alert('付款成功！')
	}
})
bigshop()
function bigshop(){
	for(let i=0;i<listas.length;i++){
		listas[i].addEventListener('touchstart',function(){
			var d = this.children[0].value;
			console.log(d)
			setTimeout(function(){
				addClass(moreshop,'showPage');
			},1000)
			removeClass(warp,'showPage');
			shoptitles.innerText = jsonM[d].title;
		})
	}
}
tab()
function tab(){    // 底部tab图片切换效果
	for(let i=0;i<fotas.length;i++){
		fotas[i].addEventListener('touchstart',function(){
			removeClass(fotas_p[0],'green');
			if(i<3){
				fotas_img[i].src = './img/fot-'+(i+1)+'-2.jpg';
				fotas_img[0].src = './img/fot-1.jpg';
			}
			for(let k=0;k<fotas.length;k++){
				fotas_img[k].src = './img/fot-'+(k+1)+'.jpg';
			}
			if(fotas_img[i].src == './img/fot-'+(i+1)+'.jpg'){
				fotas_img[i].src = './img/fot-'+(i+1)+'-2.jpg';
			}else{
				fotas_img[i].src = './img/fot-'+(i+1)+'.jpg';
			}
			if(i<3){
				fotas_img[i].src = './img/fot-'+(i+1)+'-2.jpg';
			}
			this.src = './img/fot-'+(i+1)+'.jpg';
		})
	}
	tabchange(fotas,'green') // 底部tab的样式切换
}
ifuser(fotas[3],own,warp,user);  //判断是否登录

tabchange(pas,'green')
tabchange(pha,'active')
function tabchange(obj,a){   // tab切换的函数封装
	for(let i=0;i<obj.length;i++){
		obj[i].addEventListener('touchstart',function(){
			addClass(obj[i],a);
			for(let k=0;k<obj.length;k++){
				removeClass(obj[k],a)
			}
			if(obj[i].className ==''){
				this.className = a;
			}else{
				this.className = '';
			}
		})
		this.className = a;
	}
}


function showpage(obj,a,b){   //切换页面的函数
	obj.addEventListener('touchstart',function(){
		setTimeout(function(){
			addClass(a,'showPage');
		},1000)
		removeClass(b,'showPage');
		lg.style.display = 'none';
	})
}

function ifuser(obj,a,b,c){
	obj.addEventListener('touchstart',function(){  // 判断是否登陆成功
		var type = loga.innerText+'';
		if(type.charAt(0)=='1'){
			addClass(a,'showPage');
			removeClass(b,'showPage');
		}else{
			alert('亲，请先登录哦！')
			addClass(c,'showPage');
			removeClass(b,'showPage');
		}
	})
	
}
