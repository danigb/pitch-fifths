# a-pitch-fifths

Pitches and intervals expressed in fifths:

```js
var fifths = require('a-pitch-fifths')
fifths([1, 0, 0]) // => [2, -1]
```

This is a low level library. Probably you want to use [tonal](https://github.com/danigb/tonal)

If you don't know what are those arrays, see [a-pitch](https://github.com/danigb/a-pitch)

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="fifths"><span class="type-signature"></span>fifths<span class="signature">(apitch)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a pitch or interval measured in fifths and octaves</p>
<p>Every interval (or pitch) can be expressed by repeating ascending or descending
fifths and octaves. For exaple, interval major second is two fifths up and
one octave down:
<code>fifths([1, 0, 0]) // =&gt; [2, -1]</code></p>
<p>This representation is useful for calculating interval distances, transpositions
or keys</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>apitch</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch or interval as <a href="https://github.com/danigb/a-pitch">a-pitch</a></p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/a-pitch-fifths/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/a-pitch-fifths/blob/master/index.js#L27">lineno 27</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array with the form [fifths, octaves] where both are integers</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var fifths = require('a-pitch-fifths')
fifths([0, 0, 0]) // => [0, 0]
fifths([0, 0, 1]) // => [0, 1]
fifths([1, 0, 0]) // => [2, -1]</code></pre>
</dd>
<dt>
<h4 class="name" id="toAPitch"><span class="type-signature"></span>toAPitch<span class="signature">(coord)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the <a href="https://github.com/danigb/a-pitch">a-pitch</a> structure from a
fifths array</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>coord</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the fifths array</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/a-pitch-fifths/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/a-pitch-fifths/blob/master/index.js#L45">lineno 45</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the a-pitch structure</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var fifths = require('a-pitch-fifths')
fifths.toAPitch([3, -1]) // => [6, 0, 1]</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License
