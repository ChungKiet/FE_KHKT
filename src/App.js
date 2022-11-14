import { useState } from "react";
import { Sidebar } from "../src/components";

function App() {
  const TEMP_NODE = [
    {
      id: "Tài liệu tham khảo",
      children: [
        {
          id: "Phổ A",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ B",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ C",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
      ],
    },
    {
      id: "Hướng dẫn giải",
      children: [
        {
          id: "Phổ A",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ B",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
        {
          id: "Phổ C",
          children: [
            { id: "Hydrocarbon no", children: [] },
            { id: "Hydrocarbon không no", children: [] },
          ],
        },
      ],
    },
  ];
  const CONTENT_TYPE = { theory: 1, video: 2 };
  const HTML_STRING = `<div class="post-layout">
  <div class="votecell post-layout--left">
      <div class="js-voting-container d-flex jc-center fd-column ai-stretch gs4 fc-black-200" data-post-id="17226232">
  <button class="js-vote-up-btn flex--item s-btn s-btn__unset c-pointer " data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Up vote" data-selected-classes="fc-theme-primary" data-unselected-classes="" aria-describedby="--stacks-s-tooltip-vukmpyxc">
      <svg aria-hidden="true" class="svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z"></path></svg>
  </button><div id="--stacks-s-tooltip-vukmpyxc" class="s-popover s-popover__tooltip" role="tooltip">This question shows research effort; it is useful and clear<div class="s-popover--arrow"></div></div>
  <div class="js-vote-count flex--item d-flex fd-column ai-center fc-black-500 fs-title" itemprop="upvoteCount" data-value="0">
      0
  </div>
  <button class="js-vote-down-btn flex--item s-btn s-btn__unset c-pointer " data-controller="s-tooltip" data-s-tooltip-placement="right" aria-pressed="false" aria-label="Down vote" data-selected-classes="fc-theme-primary" data-unselected-classes="" aria-describedby="--stacks-s-tooltip-7e9mln71">
      <svg aria-hidden="true" class="svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>
  </button><div id="--stacks-s-tooltip-7e9mln71" class="s-popover s-popover__tooltip" role="tooltip">This question does not show any research effort; it is unclear or not useful<div class="s-popover--arrow"></div></div>


  
<button class="js-saves-btn s-btn s-btn__unset c-pointer py4" id="saves-btn-17226232" data-controller="s-tooltip" data-s-tooltip-placement="right" data-s-popover-placement="" aria-pressed="false" data-post-id="17226232" data-post-type-id="1" data-user-privilege-for-post-click="-1" aria-controls="" data-s-popover-auto-show="false" aria-describedby="--stacks-s-tooltip-i0cidj5t">
<svg aria-hidden="true" class="fc-theme-primary-500 js-saves-btn-selected d-none svg-icon iconBookmark" width="18" height="18" viewBox="0 0 18 18"><path d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path></svg>
<svg aria-hidden="true" class="js-saves-btn-unselected svg-icon iconBookmarkAlt" width="18" height="18" viewBox="0 0 18 18"><path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path></svg>
</button><div id="--stacks-s-tooltip-i0cidj5t" class="s-popover s-popover__tooltip" role="tooltip">Save this question.<div class="s-popover--arrow"></div></div>









  <a class="js-post-issue flex--item s-btn s-btn__unset c-pointer py6 mx-auto" href="/posts/17226232/timeline" data-shortcut="T" data-ks-title="timeline" data-controller="s-tooltip" data-s-tooltip-placement="right" aria-label="Timeline" aria-describedby="--stacks-s-tooltip-y2lrtgks"><svg aria-hidden="true" class="mln2 mr0 svg-icon iconHistory" width="19" height="18" viewBox="0 0 19 18"><path d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"></path></svg></a><div id="--stacks-s-tooltip-y2lrtgks" class="s-popover s-popover__tooltip" role="tooltip">Show activity on this post.<div class="s-popover--arrow"></div></div>

</div>

  </div>

  

<div class="postcell post-layout--right">

<div class="s-prose js-post-body" itemprop="text">
          
<p>Here's what I'm hoping to do: I have a list of menu items. When one of these items are clicked on, I want a javascript function to take the text in that list item and place it in a div somewhere else on the page. </p>

<p>Here's my jsfiddle: <a href="http://jsfiddle.net/3BF4q/" rel="nofollow">http://jsfiddle.net/3BF4q/</a> </p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">setText</span>(<span class="hljs-params"></span>) {
<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">"selected"</span>).<span class="hljs-property">innerHTML</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">innerHTML</span>; 
};
</code></pre>

<p>I don't know much about JavaScript, so I'm sure the problem is simple. </p>

<p>Also, if there's a similar question on stackoverflow please send me a link to it and I'll remove this question. </p>
</div>

  <div class="mt24 mb12">
      <div class="post-taglist d-flex gs4 gsy fd-column">
          <div class="d-flex ps-relative fw-wrap">
              <ul class="ml0 list-ls-none js-post-tag-list-wrapper d-inline"><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/javascript" class="post-tag js-gps-track" title="show questions tagged 'javascript'" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">javascript</a></li><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/onclick" class="post-tag js-gps-track" title="show questions tagged 'onclick'" aria-label="show questions tagged 'onclick'" rel="tag" aria-labelledby="onclick-container">onclick</a></li><li class="d-inline mr4 js-post-tag-list-item"><a href="/questions/tagged/innerhtml" class="post-tag js-gps-track" title="show questions tagged 'innerhtml'" aria-label="show questions tagged 'innerhtml'" rel="tag" aria-labelledby="innerhtml-container">innerhtml</a></li></ul>
          </div>
      </div>
  </div>

<div class="mb0 ">
  <div class="mt16 d-flex gs8 gsy fw-wrap jc-end ai-start pt4 mb16">
      <div class="flex--item mr16 fl1 w96">
          


<div class="js-post-menu pt2" data-post-id="17226232">
<div class="d-flex gs8 s-anchors s-anchors__muted fw-wrap">

      <div class="flex--item">
          <a href="/q/17226232/18342462" rel="nofollow" itemprop="url" class="js-share-link js-gps-track" title="Short permalink to this question" data-gps-track="post.click({ item: 2, priv: -1, post_type: 1 })" data-controller="se-share-sheet s-popover" data-se-share-sheet-title="Share a link to this question" data-se-share-sheet-subtitle="(Includes your user id)" data-se-share-sheet-post-type="question" data-se-share-sheet-social="facebook twitter devto" data-se-share-sheet-location="1" data-se-share-sheet-license-url="https%3a%2f%2fcreativecommons.org%2flicenses%2fby-sa%2f3.0%2f" data-se-share-sheet-license-name="CC BY-SA 3.0" data-s-popover-placement="bottom-start" aria-controls="se-share-sheet-0" data-action=" s-popover#toggle se-share-sheet#preventNavigation s-popover:show->se-share-sheet#willShow s-popover:shown->se-share-sheet#didShow" aria-expanded="false">Share</a><div class="s-popover z-dropdown s-anchors s-anchors__default" style="width: unset; max-width: 28em;" id="se-share-sheet-0"><div class="s-popover--arrow"></div><div><label class="js-title fw-bold" for="share-sheet-input-se-share-sheet-0">Share a link to this question</label> <span class="js-subtitle">(Includes your user id)</span></div><div class="my8"><input type="text" id="share-sheet-input-se-share-sheet-0" class="js-input s-input wmn3 sm:wmn-initial bc-black-200 bg-white fc-dark" readonly=""></div><div class="d-flex jc-space-between ai-center mbn4"><button class="js-copy-link-btn s-btn s-btn__link js-gps-track" data-gps-track="">Copy link</button><a href="https://creativecommons.org/licenses/by-sa/3.0/" rel="license" class="js-license s-block-link w-auto" target="_blank" title="The current license for this post: CC BY-SA 3.0">CC BY-SA 3.0</a><div class="js-social-container d-none"></div></div></div>
      </div>


                  <div class="flex--item">
                      <button type="button" class="s-btn s-btn__link js-error-click js-gps-track" data-gps-track="post.click({ item: 6, priv: -1, post_type: 1 }); suggestededit.queue_full" title="Revise and improve this post" data-error-message="There are <a href=&quot;https://meta.stackexchange.com/questions/84362/whats-the-fixed-size-of-the-suggested-edit-queue&quot;>too many pending edits</a> on Stack Overflow. Please try again later.">Edit</button>
                  </div>

      <div class="flex--item">
          <button type="button" id="btnFollowPost-17226232" class="s-btn s-btn__link js-follow-post js-follow-question js-gps-track" data-gps-track="post.click({ item: 14, priv: -1, post_type: 1 })" data-controller="s-tooltip " data-s-tooltip-placement="bottom" data-s-popover-placement="bottom" aria-controls="" aria-describedby="--stacks-s-tooltip-yvd7pk9g">
              Follow
          </button><div id="--stacks-s-tooltip-yvd7pk9g" class="s-popover s-popover__tooltip" role="tooltip">Follow this question to receive notifications<div class="s-popover--arrow"></div></div>
      </div>






</div>
<div class="js-menu-popup-container"></div>
</div>
      </div>

      <div class="post-signature owner flex--item">
          <div class="user-info user-hover">
<div class="user-action-time">
  asked <span title="2013-06-21 01:08:40Z" class="relativetime">Jun 21, 2013 at 1:08</span>
</div>
<div class="user-gravatar32">
  <a href="/users/2345006/invot"><div class="gravatar-wrapper-32"><img src="https://i.stack.imgur.com/XFcNh.jpg?s=64&amp;g=1" alt="invot's user avatar" width="32" height="32" class="bar-sm"></div></a>
</div>
<div class="user-details" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
  <a href="/users/2345006/invot">invot</a><span class="d-none" itemprop="name">invot</span>
  <div class="-flair">
      <span class="reputation-score" title="reputation score " dir="ltr">523</span><span title="7 silver badges" aria-hidden="true"><span class="badge2"></span><span class="badgecount">7</span></span><span class="v-visible-sr">7 silver badges</span><span title="29 bronze badges" aria-hidden="true"><span class="badge3"></span><span class="badgecount">29</span></span><span class="v-visible-sr">29 bronze badges</span>
  </div>
</div>
</div>


      </div>
  </div>
</div>

</div>




      <span class="d-none" itemprop="commentCount">1</span> 
<div class="post-layout--right js-post-comments-component">
  <div id="comments-17226232" class="comments js-comments-container bt bc-black-075 mt12 " data-post-id="17226232" data-min-length="15">
      <ul class="comments-list js-comments-list" data-remaining-comments-count="0" data-canpost="false" data-cansee="true" data-comments-unavailable="false" data-addlink-disabled="true">

                  <li id="comment-24957973" class="comment js-comment " data-comment-id="24957973" data-comment-owner-id="1201647" data-comment-score="1">
  <div class="js-comment-actions comment-actions">
      <div class="comment-score js-comment-edit-hide">
              <span title="number of 'useful comment' votes received" class="cool">1</span>
      </div>
  </div>
  <div class="comment-text  js-comment-text-and-form">
      <div class="comment-body js-comment-edit-hide">
          
          <span class="comment-copy">Did my answer help you at all??  You were just not passing the element into the function....hence it didn't know which element you were clicking</span>
          
        <div class="d-inline-flex ai-center">
–&nbsp;<a href="/users/1201647/kylie" title="11,081 reputation" class="comment-user">Kylie</a>
          </div>
          <span class="comment-date" dir="ltr"><a class="comment-link" href="#comment24957973_17226232" aria-label="Link to comment"><span title="2013-06-21 01:33:28Z, License: CC BY-SA 3.0" class="relativetime-clean">Jun 21, 2013 at 1:33</span></a></span>
      </div>
  </div>
</li>

      </ul>
</div>

  <div id="comments-link-17226232" data-rep="50" data-reg="true">
              <a class="js-add-link comments-link disabled-link" title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments." href="#" role="button">Add a comment</a>
          <span class="js-link-separator dno">&nbsp;|&nbsp;</span>
      <a class="js-show-link comments-link dno" title="Expand to show all comments on this post" href="#" onclick="" role="button"></a>
  </div>         
</div>
</div>`;
  const [node, setNode] = useState(TEMP_NODE);
  const [contentType, setContentType] = useState(CONTENT_TYPE.theory);
  return (
    <div className="flex pl-72 bg-slate-200">
      <Sidebar nodeList={node}></Sidebar>
      <div className="w-full p-5">
        <div className="mx-auto max-w-5xl">
          <h1 className=" text-center font-black text-4xl">Nghiên cứu phổ</h1>
          <div className="mt-6 w-full flex gap-6">
            <button
              className={`w-full h-12 text-gray-800 text-xl font-bold shadow hover:shadow-xl rounded-lg transition-all ${
                contentType === CONTENT_TYPE.theory
                  ? " bg-slate-400 text-gray-900"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setContentType(CONTENT_TYPE.theory)}
            >
              Lý thuyết
            </button>
            <button
              className={`w-full h-12 text-gray-800 text-xl font-bold shadow hover:shadow-xl rounded-lg transition-all ${
                contentType === CONTENT_TYPE.video
                  ? " bg-slate-400 text-gray-900"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setContentType(CONTENT_TYPE.video)}
            >
              Video hướng dẫn
            </button>
          </div>
          <div className="mt-6 p-5 rounded-md bg-white shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: `${HTML_STRING}` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
