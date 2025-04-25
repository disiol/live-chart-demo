const a0_0x47e9e7 = a0_0x2093;

function a0_0x42a3() {
    const _0x6cd1a8 = ['datasets', 'update', '1510695RxANGq', 'getElementById', '39MwphVm', '1699610UrPWQN', 'push', '#aaa', '4238iDScRm', 'getContext', 'parsed', 'line', 'labels', '192EVVNqQ', '152uVVlwY', 'rgba(0,255,0,0.1)', 'data', '43309xAoqII', '1656960NcAJAV', 'toFixed', 'shift', '15297CMCjyN', '1037995xOGgzH', 'Price:\x20$', 'length', '10xOCSWp', 'yellow'];
    a0_0x42a3 = function () {
        return _0x6cd1a8;
    };
    return a0_0x42a3();
}

(function (_0x28ccfd, _0x58cb53) {
    const _0x315595 = a0_0x2093, _0x3f5c60 = _0x28ccfd();
    while (!![]) {
        try {
            const _0x5c07da = -parseInt(_0x315595(0xeb)) / 0x1 * (-parseInt(_0x315595(0xef)) / 0x2) + parseInt(_0x315595(0xe1)) / 0x3 * (-parseInt(_0x315595(0xf5)) / 0x4) + parseInt(_0x315595(0xe2)) / 0x5 + -parseInt(_0x315595(0xf4)) / 0x6 * (parseInt(_0x315595(0xf8)) / 0x7) + parseInt(_0x315595(0xde)) / 0x8 + parseInt(_0x315595(0xe9)) / 0x9 + -parseInt(_0x315595(0xe5)) / 0xa * (parseInt(_0x315595(0xec)) / 0xb);
            if (_0x5c07da === _0x58cb53) break; else _0x3f5c60['push'](_0x3f5c60['shift']());
        } catch (_0x23d053) {
            _0x3f5c60['push'](_0x3f5c60['shift']());
        }
    }
}(a0_0x42a3, 0x1d0af));

function a0_0x2093(_0x2f7077, _0x2d531d) {
    const _0x42a3b2 = a0_0x42a3();
    return a0_0x2093 = function (_0x209376, _0x17fcf5) {
        _0x209376 = _0x209376 - 0xde;
        let _0x2314a8 = _0x42a3b2[_0x209376];
        return _0x2314a8;
    }, a0_0x2093(_0x2f7077, _0x2d531d);
}

const ctx = document[a0_0x47e9e7(0xea)]('tradeChart')[a0_0x47e9e7(0xf0)]('2d'), tradeChart = new Chart(ctx, {
    'type': a0_0x47e9e7(0xf2),
    'data': {
        'labels': [],
        'datasets': [{
            'label': 'Price\x20($)',
            'data': [],
            'borderColor': 'lime',
            'backgroundColor': a0_0x47e9e7(0xf6),
            'pointRadius': 0x4,
            'pointBackgroundColor': a0_0x47e9e7(0xe6),
            'tension': 0.3
        }]
    },
    'options': {
        'responsive': !![],
        'animation': ![],
        'scales': {
            'x': {'title': {'display': !![], 'text': 'Time'}, 'ticks': {'color': a0_0x47e9e7(0xee)}},
            'y': {'title': {'display': !![], 'text': 'Price\x20($)'}, 'ticks': {'color': a0_0x47e9e7(0xee)}}
        },
        'plugins': {
            'legend': {'labels': {'color': '#fff'}},
            'tooltip': {'callbacks': {'label': _0x1d65cf => a0_0x47e9e7(0xe3) + _0x1d65cf[a0_0x47e9e7(0xf1)]['y'][a0_0x47e9e7(0xdf)](0x2)}}
        }
    }
});

function simulateTrade() {
    const _0x52ccaa = a0_0x47e9e7, _0x19a566 = new Date(),
        _0x26f787 = _0x19a566['toLocaleTimeString']('en-US', {'hour12': ![]}),
        _0x3b68ea = 0xc8 + Math['random']() * 0x28 - 0x14;
    tradeChart[_0x52ccaa(0xf7)][_0x52ccaa(0xf3)][_0x52ccaa(0xed)](_0x26f787), tradeChart[_0x52ccaa(0xf7)][_0x52ccaa(0xe7)][0x0][_0x52ccaa(0xf7)][_0x52ccaa(0xed)](_0x3b68ea), tradeChart[_0x52ccaa(0xf7)]['labels'][_0x52ccaa(0xe4)] > 0x1e && (tradeChart[_0x52ccaa(0xf7)]['labels'][_0x52ccaa(0xe0)](), tradeChart[_0x52ccaa(0xf7)][_0x52ccaa(0xe7)][0x0][_0x52ccaa(0xf7)]['shift']()), tradeChart[_0x52ccaa(0xe8)]();
}

setInterval(simulateTrade, 0x7d0);
