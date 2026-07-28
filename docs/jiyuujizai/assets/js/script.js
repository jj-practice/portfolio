

/*
// システム設定を取得
const getPreferredTheme = () => {
console.log(this);
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
// テーマを適用
document.documentElement.setAttribute('data-bs-theme', getPreferredTheme())



    const btnToggle = document.getElementById('btn-toggle');
    const htmlElement = document.documentElement;
    const modeText = document.getElementById('mode-text');

    // ページ読み込み時にローカルストレージから設定を読み込む
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    modeText.textContent = currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1);

    // ボタンクリックで切り替え
    btnToggle.addEventListener('click', () => {
      let newTheme = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
      
      // 属性を変更してページを即座に更新
      htmlElement.setAttribute('data-bs-theme', newTheme);
      
      // 設定をローカルストレージに保存
      localStorage.setItem('theme', newTheme);
      modeText.textContent = newTheme.charAt(0).toUpperCase() + newTheme.slice(1);
    });
*/


// 設定2 OS設定 自動追従可能
// https://www.google.com/search?q=bootstrap5.3+%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89+%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%A2%E3%83%BC%E3%83%89%E5%88%87%E6%9B%BF%E5%90%8C%E6%9C%9F&sca_esv=c17abc454b143b6a&biw=1458&bih=856&sxsrf=ANbL-n62mQPzcH_JfuxQXcwn9IVYjAM8LQ%3A1778234369283&ei=AbT9aZD9ELrh2roPlr2i2AY&ved=0ahUKEwjQgaKft6mUAxW6sFYBHZaeCGsQ4dUDCBE&uact=5&oq=bootstrap5.3+%E3%82%AB%E3%83%A9%E3%83%BC%E3%83%A2%E3%83%BC%E3%83%89+%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%A2%E3%83%BC%E3%83%89%E5%88%87%E6%9B%BF%E5%90%8C%E6%9C%9F&gs_lp=Egxnd3Mtd2l6LXNlcnAiQWJvb3RzdHJhcDUuMyDjgqvjg6njg7zjg6Ljg7zjg4kg44OW44Op44Km44K244Oi44O844OJ5YiH5pu_5ZCM5pyfMgkQIRgKGKABGCpIqkZQriFY3kJwAngAkAEAmAGWAaABwgWqAQMxLjW4AQPIAQD4AQGYAgigAuAFwgIIEAAY7wUYsAPCAgUQABjvBcICBRAhGKABmAMAiAYBkAYDkgcDMi42oAe-DrIHAzAuNrgH2QXCBwUwLjcuMcgHDoAIAQ&sclient=gws-wiz-serp
/*
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btn-color-mode');
    const html = document.documentElement;

    // localStorageから既存設定を取得、なければOS設定（matchMedia）を使う
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) return storedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // テーマを適用する関数
    const setTheme = theme => {
        html.setAttribute('data-bs-theme', theme);
        setStoredTheme(theme);
    };

    // 初期化: 保存されたテーマまたはOS設定を適用
    setTheme(getPreferredTheme());

    // ボタンクリックで手動切替
    btn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // OSのテーマ設定が変更された時に追従
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const storedTheme = getStoredTheme();
//console.log(storedTheme);
        //if (!storedTheme) { // 手動設定がない場合のみ自動追従
            setTheme(e.matches ? 'dark' : 'light');
        //}
    });
});

*/




/**
 * 環境設定情報
 */
const $cfg = {
  'root': {
    // 更新日時 string
    'update': ''
    //
    ,'pageTopId':"top"
  }
  ,
  // スクロール
  'scroll': {
    // 使用有無
    'use': false
    // 動き
    ,'behavior': "auto"
    // jQuery:animate
    ,'animate': {
      // 使用有無
      'use': false
      // アニメーションの再生時間
      ,'duration': 1000
      // アニメーションが変化する速度やタイミング："linear"|"swing"
      ,'easing': "linear"
    }
  }
  ,
  // ナビバー
  'navbar': {
		// セレクター string
    'selector': '#jj-navbar'
    // collapseセレクター string
    ,'collapseSelector': '#jj-navbarCollapse'
    // 固定化 string 
    ,'useFixed': true
    // スマホ等でメニュー崩れ対策(確保する最小限の幅)
    ,'minWidth': 320
  }
};


/**
 * 設定情報
 */
const $setting = {
	'location_hash': null
	// ナビバー要素のセレクター
	,'navbar_selector': null
	// ナビバー(.navbar.collapse)要素のセレクター
	,'navbar_collapseSelector': null
	// ページ上端からナビバー要素までの距離
	,'navbar_topPosition': 0
	// ナビバー要素の高さ
	,'navbar_height': 0
	// スクロール
	,'scrollBehavior': "auto"
	// ページトップのセレクター
	,'pageTopSelector': null
	// 
	//,'isDarkMode': false

};



jQuery(function() {


	// すべてのツールチップを初期化
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


	// <meta>要素 設定値取得
  let cfg_meta = jj_get_cfg_meta();

  // ターゲットのキーをループして設定値更新
  Object.keys(cfg_meta).forEach(key => {
    if (typeof($cfg[key]) !== "undefined") {
      for (key2 in cfg_meta[key]) {
        if (typeof($cfg[key][key2]) !== "undefined") {
          $cfg[key][key2] = cfg_meta[key][key2];
        }
      }
    }
  });

	// ページトップ セレクター
	$setting.pageTopSelector = jj_pageTopSelectorSet();

  // ナビバー セレクター 設定
	if ($($cfg.navbar.selector).length > 0) {
		$setting.navbar_selector = $cfg.navbar.selector;
	}

  // ナビバー セレクター(.navbar-collapse) 設定
	if ($($cfg.navbar.collapseSelector).length > 0) {
		$setting.navbar_collapseSelector = $cfg.navbar.collapseSelector;
	}

  // ナビバー セレクターが存在しない場合は処理中断
	if ( ! $setting.navbar_selector) return false;

	// ページ上端からナビバー要素までの距離を取得
	$setting.navbar_topPosition = $($setting.navbar_selector).offset().top;

	// ナビバー要素の高さを取得
	$setting.navbar_height = $($setting.navbar_selector).outerHeight();

  // hash値 取得
  if (location.hash) {
    $setting.location_hash = location.hash;
  }


	// スクロール(縦)の位置を取得
	$setting.windowY = window.scrollY;

	// システムのダークモード設定を取得
	//if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
	//	$setting.isDarkMode = true;
	//}


  // 指定のポジションへスクロール
  jj_positionScroll($setting.location_hash);

	// ナビバー 固定化
	jj_navbarFixed($setting);

	// scrollBehavior "smooth":スムーズ" auto"="無効化"
	if ($cfg.scroll.use === true && $cfg.scroll.animate.use !== true && $cfg.scroll.behavior) {
		switch ($cfg.scroll.behavior) {
			case "smooth": $setting.scrollBehavior = "smooth"; break;
			case "auto": $setting.scrollBehavior = "auto"; break;
			default: $setting.scrollBehavior = "unset"; break;
		}
	} else {
		$setting.scrollBehavior = "auto";
	}

	// scroll-behavior 設定
	if ($cfg.scroll.use === false) {
		$('html').css('scrollBehavior', "auto");
	}

//console.log( $('html').css('scrollBehavior') );



// テーマ
jj_themeToggle();



	// アンカーリンク クリック
	$('a[href^="#"]').click(function(){
		jj_positionScroll($(this).attr("href"));

    // ナビバーメニューを閉じる
    jj_navbarClose();
	});


	// window スクロール
	$(window).scroll(function() {
		// スクロール(Y)座標を取得
		$setting.windowY = window.scrollY;

		// ナビバー 固定化
		jj_navbarFixed();
	});

  // ページトップへもどる
  $(".scroll-to-page-top").on("click", function () {
    //window.history.pushState({}, '', '#');
    history.replaceState('', '', $setting.pageTopSelector);

		// TOPポジションへスクロール
		jj_positionScroll($setting.pageTopSelector);

    // ナビバーメニューを閉じる
    jj_navbarClose();
  });


	// ツールチップ クリック
	$('[data-bs-toggle="tooltip"]').on('click', function() {
		bootstrap.Tooltip.getInstance(this).hide();
	});



  /*
  // ターゲットとなるBootstrap5のnavbar-collapse要素を指定
  // 開ききった後のイベント
  $setting.navbar.collapseSelector.on('shown.bs.collapse', function () {
    console.log('Navbarが開きました');
    //$setting.navbar.show_height = $($setting.navbar_selector).outerHeight();
    //set_navbar_height();
  });

  // 閉じきった後のイベント
  $setting.navbar.collapseSelector.on('hidden.bs.collapse', function () {
    //console.log('Navbarが閉じました');
    //$setting.navbar.show_height = $($setting.navbar_selector).outerHeight();
  });
  */

//console.log( $cfg );
//console.log( $setting );

});




/**
 * テーマ設定 ver2
 */
function jj_themeToggle() {

  const html = document.documentElement;

  // localStorageから既存設定を取得、なければOS設定（matchMedia）を使う
  const getStoredTheme = () => localStorage.getItem('theme');

	// localStorageに設定を書込
  const setStoredTheme = theme => localStorage.setItem('theme', theme);



	let bd_mode_toggle = $('.bd-mode-toggle');
	let themes = {'theme':"", 'toggle':"", 'stored':"", 'preferred':"", 'setTheme':""};

	//
	themes.theme = html.getAttribute('data-bs-theme');

	// ローカルストレージのデータ取得
	themes.stored = getStoredTheme();

	// OSの設定 取得："darak" OR "light"
	themes.preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

console.log(themes);

	if (themes.stored && themes.stored != "auto" && themes.theme != themes.stored) {
		themes.setTheme = themes.stored;

	}
	else if (themes.preferred && themes.theme != themes.preferred) {
		themes.setTheme = themes.preferred;
	}
	else {
		themes.setTheme = themes.preferred;
	}

	if (themes.stored) {
		themes.toggle = themes.stored;
	}
	else {
		themes.toggle = themes.preferred;
	}


console.log(themes);

  // 初期化: 保存されたテーマまたはOS設定を適用
  //setTheme(getPreferredTheme());

	if (themes.theme != themes.setTheme) {
		// テーマ 設定
		setTheme(themes.setTheme);
	}


	// 切替ボタン表示
	let toggle = $('[data-bs-theme-value="'+themes.toggle+'"]', bd_mode_toggle);
	$(toggle).addClass('active');
	$('.bi-check', toggle).removeClass('d-none');


	$('.dropdown-item', bd_mode_toggle).on('click', function() {
		themes.stored = themes.toggle = $(this).data('bs-theme-value');

		// localStorage 設定
		setStoredTheme(themes.toggle);

		//let val = themes.toggle == "auto" ? themes.preferred : themes.stored;
		//setTheme(val);
		setTheme(themes.toggle == "auto" ? themes.preferred : themes.stored);

		// active 無効化
		$('.dropdown-item', bd_mode_toggle).removeClass('active');
		$('.bi-check', bd_mode_toggle).addClass('d-none');

		// active 有効化
		$(this).addClass('active');
		$('.bi-check', this).removeClass('d-none');

console.log("toggle change")
console.log(themes);
	});

}



/**
 * テーマ設定 ver1
 */
function jj_themeToggle(_mode = "auto") {

/*
	let bd_mode_toggle = $('.bd-mode-toggle');

	$('.dropdown-item', bd_mode_toggle).on('click', function() {
//console.log(this);
//console.log( $(this).data('bs-theme-value') );

		// active 無効化
		$('.dropdown-item', bd_mode_toggle).removeClass('active');
		$('.bi-check', bd_mode_toggle).addClass('d-none');

		// active 有効化
		$(this).addClass('active');
		$('.bi-check', this).removeClass('d-none');
	});

    // OSのテーマ設定が変更された時に追従
    //window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    //    //const storedTheme = getStoredTheme();
    //});
*/


/*
	let isDarkMode = null;
	if (_mode == "auto") {
		// システムのダークモード設定を取得
		isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

  const htmlTag = document.documentElement;

  // 現在のテーマを取得
  const currentTheme = htmlTag.getAttribute('data-bs-theme');

	// 適用するテーマ
  const newTheme = isDarkMode === true ? 'dark' : 'light';

  if (currentTheme != newTheme) {
    htmlTag.setAttribute('data-bs-theme', newTheme);
  }
*/

    const html = document.documentElement;

    // localStorageから既存設定を取得、なければOS設定（matchMedia）を使う
    const getStoredTheme = () => localStorage.getItem('theme');

		// localStorageに設定を書込
    const setStoredTheme = theme => localStorage.setItem('theme', theme);

		/*
    const getPreferredTheme = () => {
				// localStorage 取得
        const storedTheme = getStoredTheme();
        if (storedTheme && storedTheme != "auto") return storedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    */

    // テーマを適用する関数
    const setTheme = theme => {
        html.setAttribute('data-bs-theme', theme);
        //setStoredTheme(theme);
    };


		let bd_mode_toggle = $('.bd-mode-toggle');
		let themes = {'theme':"", 'toggle':"", 'stored':"", 'preferred':"", 'setTheme':""};

		//
		themes.theme = html.getAttribute('data-bs-theme');

		// ローカルストレージのデータ取得
		themes.stored = getStoredTheme();

		// OSの設定 取得："darak" OR "light"
		themes.preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

console.log(themes);

		if (themes.stored && themes.stored != "auto" && themes.theme != themes.stored) {
			themes.setTheme = themes.stored;

		}
		else if (themes.preferred && themes.theme != themes.preferred) {
			themes.setTheme = themes.preferred;
		}
		else {
			themes.setTheme = themes.preferred;
		}

		if (themes.stored) {
			themes.toggle = themes.stored;
		}
		else {
			themes.toggle = themes.preferred;
		}


console.log(themes);

    // 初期化: 保存されたテーマまたはOS設定を適用
    //setTheme(getPreferredTheme());

		if (themes.theme != themes.setTheme) {
			// テーマ 設定
			setTheme(themes.setTheme);
		}

		//if (themes.theme != themes.toggle) {
			// 切替ボタン表示
			let toggle = $('[data-bs-theme-value="'+themes.toggle+'"]', bd_mode_toggle);
			$(toggle).addClass('active');
			$('.bi-check', toggle).removeClass('d-none');
		//}


	$('.dropdown-item', bd_mode_toggle).on('click', function() {
/*
		let themeValue = $(this).data('bs-theme-value');
		themes.toggle = themeValue;

		setStoredTheme(themeValue);
		themes.stored = themeValue;

		// auto
		if (themeValue == "auto") {
			themeValue = themes.preferred;
		}

		//if (themes.theme != themeValue) {
			setTheme(themeValue);
		//}
*/


		themes.stored = themes.toggle = $(this).data('bs-theme-value');

		// localStorage 設定
		setStoredTheme(themes.toggle);

		//let val = themes.toggle == "auto" ? themes.preferred : themes.stored;
		//setTheme(val);
		setTheme(themes.toggle == "auto" ? themes.preferred : themes.stored);



		// active 無効化
		$('.dropdown-item', bd_mode_toggle).removeClass('active');
		$('.bi-check', bd_mode_toggle).addClass('d-none');

		// active 有効化
		$(this).addClass('active');
		$('.bi-check', this).removeClass('d-none');

console.log("toggle change")
console.log(themes);
	});


  // OSのテーマ設定が変更された時に追従
  //if (themes.stored == "auto") {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      themes.preferred = e.matches ? 'dark' : 'light';
			if (themes.stored == "auto") {
    		setTheme(themes.preferred);
    	}
console.log("OS change")
console.log(themes);
    });
  //}

return true;
		/*
    // ボタンクリックで手動切替
    const btn = document.getElementById('btn-color-mode');
    btn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    */

    // OSのテーマ設定が変更された時に追従
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const storedTheme = getStoredTheme();
        //if (!storedTheme) { // 手動設定がない場合のみ自動追従
            setTheme(e.matches ? 'dark' : 'light');
        //}
    });

}




/**
 * ページトップ セレクター設定
 *
 * @return string セレクターID 例："#top"
 */
function jj_pageTopSelectorSet() {
	let ret = "#";

	if ($('#' + $cfg.root.pageTopId).length == 0) {
		$('body').attr('id', $cfg.root.pageTopId);
	}

	if ($($cfg.root.pageTopSelector).length > 0) {
		ret += $cfg.root.pageTopId;
	}

	return ret;
}


/**
 * 指定の位置(#ID)へスクロール
 *
 * @param string _id 例:#works
 */
function jj_positionScroll(_id = null) {
	if ( ! _id) return false;

	let position = 0;
	let animate = false;

  // ハッシュ(#)だけの場合は 0 のポジション
	if (_id == "#") {
		position = 0;
	}
  // 要素が実際に存在するか確認
  else if ($(_id).length) {
    // 要素の画面上部からの座標(px)を取得
    position = $(_id).offset().top;

//console.log("座標: " + targetPosition + "px");

    // 固定ナビバーの高さ分を調整
    if ($setting.navbar_height > 0) {
      position -= $setting.navbar_height;
    }

//console.log("座標: " + position + "px");
  }

//console.log('position=' + position);

	let navbarCollapseShowHeight = 0;

	if (position > 0) {
		// スマホ幅＆ナビバー非固定位置の場合
		if (isSpWidth() == true && isNavbarFixed() == false) {
			navbarCollapseShowHeight = jj_navbarCollapseShowHeight();
		}
		else if (isSpWidth() == false) {
			navbarCollapseShowHeight -= $setting.navbar_height;
		}
		// PC幅(上記以外)の場合
		else {
			navbarCollapseShowHeight -= $setting.navbar_height;
		}
	}

	if ($cfg.navbar.useFixed === true) {
		$('html').css('scrollPaddingTop', $setting.navbar_height + "px");
	}

	if ($cfg.scroll.use !== true) {
		location.hash = _id;
		return false;
	}

	if ($cfg.scroll.animate.use === true) {
		animate = true;
		if ($cfg.navbar.useFixed !== true) {
			position += $setting.navbar_height;
		}
	}

	if (navbarCollapseShowHeight > 0) {
		// 座標調整
		position -= navbarCollapseShowHeight;
	}

//console.log('animate=' + animate + '; position=' + position + '; scrollPaddingTop=' + $('html').css('scrollPaddingTop'));

	// 取得した座標へスクロール
	if (animate === true) {
		if (position >= 0) {
			jj_positionScrollAnimate(position);
		}
	} else {
		window.scroll({top: position,behavior:$cfg.scroll.behavior});
	}

}



/**
 * 指定の位置(#ID)へスクロール実行
 * @param number _position ポジション 例:0
 * @param number _duration アニメーションの再生時間 例:400
 * @param string _easing アニメーションの動き 例:"swing"
 */
function jj_positionScrollAnimate(_position = null) {
  // 数値型以外は続行しない
	if (typeof(_position) != "number") return false;

	// scroll-behavior 設定
	if ($('html').css('scrollBehavior') != $setting.scrollBehavior) {
		$('html').css('scrollBehavior', $setting.scrollBehavior);
	}

	// 再生速度 初期値
	let duration = $cfg.scroll.animate.duration;
	if (typeof(duration) != "number") {
		duration = 400;
	}

	// 再生速度 初期値
	let easing = $cfg.scroll.animate.easing;
	if (easing == "" || typeof(easing) != "string") {
		easing = "swing";
	}

  // 取得した座標へスクロール
  if (_position >= 0) {
    $('html, body').animate({scrollTop: _position}, duration, easing, function(){
			//console.log("スクロール終了");
    });
	}

}


/**
 * 閉じているナビバーの高さを計測する
 * .navbar-collapse
 * (一時的にナビバー(Bootstrap)スタイルを強制して高さを測る)
 * @return number ret
 */
function jj_navbarCollapseShowHeight() {
  let ret = 0;

  if ($($setting.navbar_collapseSelector).length > 0) {
    // ナビバー(Bootstrap)の表示クラスを追加
    $($setting.navbar_collapseSelector).addClass('show');
    // ナビバーの高さを取得
    ret = $($setting.navbar_collapseSelector).height();
    // ナビバー(Bootstrap)の表示クラスを削除
    $($setting.navbar_collapseSelector).removeClass('show');
  }

  return ret;
}


/**
 * スマホ幅 判定
 * @return boolean true:スマホ幅の場合 fale:スマホ幅以外の場
 */
function isSpWidth() {
  if ($($setting.navbar_collapseSelector).css('display') == "block") {
    return true;
  }

	return false;
}


/**
 * ナビバー固定判定
 * 現在のナビバーの状態が固定か非固定か判定する
 *
 * return boolean true=固定 false=非固定
 */
function isNavbarFixed() {
	if ($($setting.navbar_selector).css('position') == "fixed") {
		return true;
	}

	return false;
}


/**
 * 設定データ取得
 */
function jj_get_cfg_meta() {
  let config = {};
  let meta = $('meta[itemprop^="jj:"]');

  if (meta.length > 0) {
    let name = "", property = null, content = null, datas = null, res = null;
    for (let i = 0; i < meta.length; ++i) {
      name = "";
      if ((property = $(meta[i]).attr('itemprop')) && (res = property.match('(^[^\:]+):(.*)'))) {
        if (res[2]) {
          name = res[2];
        }
      }

      if (! name) {
        continue;
      }

      config[name] = {};

      // content="*" 値あり
      if ((content = $(meta[i]).attr('content'))) {
        datas = JSON.parse(content);
        for (let key in datas) {
          config[name][key] = datas[key];
        }
      }

      // data-* 値あり
      datas = $(meta[i]).data();
      if (Object.keys(datas).length == 0) {
        continue;
      }
      for (let key in datas) {
        config[name][key] = datas[key];
      }
    }
  }

  return config;
}


/**
 * ナビバー 固定化
 */
function jj_navbarFixed() {
  if ($cfg.navbar.useFixed !== true) return false;

  if (($cfg.navbar.minWidth == 0 || ($cfg.navbar.minWidth > 0 && $($setting.navbar_selector).outerWidth() > $cfg.navbar.minWidth)) && $setting.windowY > $setting.navbar_topPosition) {
    $($setting.navbar_selector).addClass('fixed-top');
    $($setting.navbar_selector).parent().css('marginTop', $setting.navbar_height);
  } else {
    $($setting.navbar_selector).removeClass('fixed-top');
    $($setting.navbar_selector).parent().css('marginTop', 0);
  }
}


/**
 * ナビバー メニューを閉じる
 */
function jj_navbarClose() {
	let selector = null;

	if ($($cfg.navbar.collapseSelector).length > 0) {
		selector = $($setting.navbar_collapseSelector);
	} else if ($('.navbar-collapse').length) {
		selector = $('.navbar-collapse');
	}

  // ナビバーメニューを閉じる
  if (selector && $(selector).length > 0) {
    selector.collapse('hide');
  }
}




























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 以下、未使用
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/**
 * 指定の位置(#ID)へスクロール
 * @param string _id 例:#works
 */
function _OLD__jj_positionScroll(_id = null) {
	if ( ! _id) return false;

	let position = 0;
	let animate = false;

//console.log( 'position=' + position + '; $cfg.root.scrollBehavior=' + $cfg.root.scrollBehavior + '; $setting.scrollBehavior=' + $setting.scrollBehavior );

  // ハッシュ(#)だけの場合は 0 のポジション
	if (_id == "#") {
		position = 0;
	}
  // 要素が実際に存在するか確認
  else if ($(_id).length) {
    // 要素の画面上部からの座標(px)を取得
    position = $(_id).offset().top;

//console.log("座標: " + targetPosition + "px");

    // 固定ナビバーの高さ分を調整
    if ($setting.navbar_height > 0) {
      position -= $setting.navbar_height;
    }

//console.log("座標: " + position + "px");
  }

//console.log('position=' + position);

	let navbarCollapseShowHeight = 0;

	if (position > 0) {
		// スマホ幅＆ナビバー非固定位置の場合
		if (isSpWidth() == true && isNavbarFixed() == false) {
//console.log( 'isSpWidth()=yes' );
			navbarCollapseShowHeight = jj_navbarCollapseShowHeight();
			//navbarCollapseShowHeight -= $setting.navbar_height;

//console.log( 'navbarCollapseShowHeight=' + navbarCollapseShowHeight);
//navbarCollapseShowHeight = 0;
//$('html').css('scrollPaddingTop', "280px");
		}
		else if (isSpWidth() == false) {
			navbarCollapseShowHeight -= $setting.navbar_height;
		}
		// PC幅(上記以外)の場合
		else {
			navbarCollapseShowHeight -= $setting.navbar_height;
		}
	}

	if ($cfg.navbar.useFixed === true) {
//console.log('useFixed=yes');
		$('html').css('scrollPaddingTop', $setting.navbar_height + "px");
		//$('html').css('scrollPaddingTop', $setting.navbar_topPosition + "px");
	}

	let duration = 0;
	let easing = "";

	if ($cfg.animate.use === true) {
		animate = true;
		duration = $cfg.animate.duration;
		easing = $cfg.animate.easing;
		if ($cfg.navbar.useFixed !== true) {
			position += $setting.navbar_height;
		}
	}
	else if ($cfg.root.scrollBehavior === true) {

	} else {
		animate = true;
		duration = $cfg.animate.duration;
		easing = $cfg.animate.easing;
	}

	if (navbarCollapseShowHeight > 0) {
		// 座標調整
		position -= navbarCollapseShowHeight;
	}

//animate = true;

//console.log('animate=' + animate + '; position=' + position + '; scrollPaddingTop=' + $('html').css('scrollPaddingTop'));

  // 取得した座標へスクロール
	if (animate === true) {
		if (position >= 0) {
			//jj_positionScrollExecute(position, $cfg.animate.duration, $cfg.animate.easing);
			jj_positionScrollExecute(position, duration, easing);
		}
	} else {
		//alert(0);
	}


//console.log( 'scrollPaddingTop=' + $('html').css('scrollPaddingTop') );

}


/**
 * ナビバー リンク強調
 */
/*
function jj_navbarLinkActive(_vars) {
  // リンクをクリック
  $(_vars.selector).on('click', function() {
    navbarLinkActive(_vars, this);
    // ナビバーメニューを閉じる
    jj_navbarClose();
  });
}
*/

/**
 * ナビバー リンク強調
 */
/*
function navbarLinkActive(_vars, _this = null) {
  if (_vars.use !== true) return false;

  // hash値 取得
  let hash = location.hash ? location.hash : (_vars.home_path ? _vars.home_path : '');

  // classを初期化
  $(_vars.selector).each(function() {
    if (_vars.init_class) {
      $(this).attr('class', _vars.init_class);
    }
  });
  if (_this) {
    // classを追加する
    if (_vars.active_class) {
      $(_this).addClass(_vars.active_class);
    }
  } else {
    // アドレスバーのhashと同期
    if (hash && _vars.active_class) {
      let own = $($('[href="' + hash + '"]'), _vars.selector);
      if (own) {
        $(own).addClass(_vars.active_class);
      }
    }
  }
}
*/







/**
 * スマホ幅ナビバー非固定 判定
 * @return boolean true:スマホ幅かつナビバー非固定位置の場合 fale:その他
 */
/*
function isSpTop() {

//console.log( 'is-fixed=' + $('#jj-navbar').css('position') );
//console.log( isNavbarFixed() );

  if (window.innerWidth < 992) {
    //if ((0 <= $setting.windowY && $setting.windowY <= $setting.navbar.offset_top)) {
    if (isNavbarFixed() == false) {
      return true;
    }
  }

	return false;
}
*/

/*
function navbarFixed(_vars) {
  if (_vars.useFixed !== true) return false;

  let navbar = $(_vars.selector),
      offset = navbar.offset(),
      navbar_h = navbar.outerHeight();

  $(window).scroll(function() {
    let navbar_w = navbar.outerWidth();
    if ((_vars.min_width == 0 || (_vars.min_width > 0 && navbar_w > _vars.min_width)) && $(window).scrollTop() > offset.top) {
      $(navbar).addClass('fixed-top');
      $(navbar).parent().css('marginTop', navbar_h);
    } else {
      $(navbar).removeClass('fixed-top');
      $(navbar).parent().css('marginTop', 0);
    }
  });
}
*/

/**
 * スクロール時の領域オフセット
 * (ナビバー(Bootstrap) スクロールズレ対策)
 */
/*
function jj_scrollPadding(_setting) {
  let windowWidth = window.innerWidth;

	//let _windows_min_width = 992;

	let paddingTop = 0;



	// ナビバー コンテンツのグループ化がON(画面幅が指定値以下)
  if (windowWidth < 992)
  {
    if ((0 <= _setting.windowY && _setting.windowY <= $setting.navbar.offset_top)) {
//      $('html').css('scrollPaddingTop', "280px");

//console.log( 'jj_navbarShowHeight()=' + jj_navbarShowHeight());
      //if ($setting.navbar.show_height == 0) {

        $setting.navbar.show_height = jj_navbarShowHeight();
        //paddingTop = jj_navbarShowHeight();
//console.log ('$setting.navbar.show_height=' + $setting.navbar.show_height);

      //}

console.log('show_height = ' + $setting.navbar.show_height);

      if ($setting.navbar.show_height > 0) {
        //$('html').css('scrollPaddingTop', $setting.navbar.show_height + "px");
        paddingTop = $setting.navbar.show_height;
      } else {
        //$('html').css('scrollPaddingTop', "280px");
        paddingTop = 280;
      }
      
      //paddingTop = 280;
    }
    else
    {
      //$('html').css('scrollPaddingTop', _setting.navbar.offset_top + "px");
      paddingTop = $setting.navbar.offset_top;
    }
  }
  // ナビバー コンテンツのグループ化がOFF(画面幅が指定値より大きい)
  else
  {
    //$('html').css('scrollPaddingTop', _setting.navbar.offset_top + "px");
    paddingTop = $setting.navbar.offset_top;
  }
paddingTop = 280;
	//if (paddingTop > 0) {
	if (paddingTop > 0 && $setting.navbar.show_height != paddingTop) {
		$setting.navbar.show_height = paddingTop;
		$('html').css('scrollPaddingTop', paddingTop + "px");
	}

console.log( "paddingTop=" + paddingTop + '; $setting.navbar.show_height=' + $setting.navbar.show_height);
}
*/


/*
function jj_scrollPadding(_setting) {
  let windowWidth = window.innerWidth;

	// ナビバー コンテンツをグループ化 ON(画面幅が指定値以下)
  if (windowWidth < 992)
  {
    if ((0 <= _setting.windowY && _setting.windowY <= _setting.navbar.offset_top)) {
//      $('html').css('scrollPaddingTop', "280px");

			//if (_setting.navbar.show_height == 0) {
			//	_setting.navbar.show_height = jj_navbarShowHeight();
			//}

      if ($setting.navbar.show_height == 0) {
        $setting.navbar.show_height = jj_navbarShowHeight();
      }

//console.log('show_height = ' + $setting.navbar.show_height);

      if ($setting.navbar.show_height > 0) {
        $('html').css('scrollPaddingTop', $setting.navbar.show_height + "px");
      } else {
        $('html').css('scrollPaddingTop', "280px");
      }
    }
    else
    {
      $('html').css('scrollPaddingTop', _setting.navbar.offset_top + "px");
    }
  }
  // ナビバー コンテンツをグループ化 OFF(画面幅が指定値以下)
  else
  {
    $('html').css('scrollPaddingTop', _setting.navbar.offset_top + "px");
  }
}
*/


/**
 * 閉じているナビバーの高さを計測する
 * .navbar
 * (一時的にナビバー(Bootstrap)スタイルを強制して高さを測る)
 * @return number ret
 */
/*
function jj_navbarShowHeight() {
  let ret = 0;

  if ($cfg.navbar.collapse_selector.length > 0) {
    // ナビバー(Bootstrap)の表示クラスを追加
    $($cfg.navbar.collapse_selector).addClass('show');
    // ナビバーの高さを取得
    ret = $($cfg.navbar.collapse_selector).closest('.navbar').outerHeight();
    // ナビバー(Bootstrap)の表示クラスを削除
    $($cfg.navbar.collapse_selector).removeClass('show');
  }

  return ret;
}
*/
