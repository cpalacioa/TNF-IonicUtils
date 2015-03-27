# TNF-IonicUtils
Ionic Utils developed by The Ninja Factory Team


###Components
* DblBackExit
* SignaturePad
 
**DblBackExit**

Simply add ```<tnf-dbl-back-exit></tnf-dbl-back-exit>``` in any template where you want the user to double press the back hardware button from the device to exit your app.

---

**SignaturePad**

Use this directive when you need the user to enter his signature.
You can use it as an attribute or element, providing an ng-model in which the directive will store the B64 of the signature

```<input tnf-signature ng-model="..."></input>```

or

```<tnf-signature ng-model="..."></tnf-signature>```

In order to show the entered signature you can easily do

```<img ng-src="{{your ng-model here}}" />```

---
