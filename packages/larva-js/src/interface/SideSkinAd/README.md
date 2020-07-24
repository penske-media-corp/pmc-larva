# Side Skins Ad JS

To use this JS module in a consuming theme that uses skin ads, add the following to the common entry point:

```
import initSideSkinAd from '@larva-js/interface/SideSkinAd';

window.addEventListener( 'message', ( e ) => {
	initSideSkinAd( e );
} );
```
