export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;


  toAdd('tbf-main-message') && bm.add('tbf-main-message', {
    label: 'TBF',
    category: 'Main Messages',
    attributes: { class: 'fa fa-picture-o' },
    content: `
    <style>
    .lp-main-message-wrap {
      background: url('https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/7/basement-fade-hdr.jpg') no-repeat left center;
      background-size: cover;
      }
      .lp-main-message-wrap > .row {
          height: 450px;
          padding: 30px 0;
      }
      .lp-main-text {
          text-align: center;
          position: relative;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          top: 50%;
      }
      .lp-main-text span {
          font-family: 'Cabin',sans-serif;
      }
      span.headline {
          font-size: 60px;
          line-height: 1.2em;
          margin-bottom: 25px;
          font-weight: bold;
          color: #fff;
          text-shadow: 0px 3px 3px rgba(0,0,0,.5);
          display: block;
      }
      span.subheadline {
          display: inline-block;
          font-size: 36px;
          line-height: 100%;
          padding: 30px 25px 35px;
          color: #ffffff;
          text-shadow: 0px 1px 0px rgb(0, 0, 0);
          background: rgb(19, 172, 222);
          border: 3px dashed #fff;
      }
      span.subheadline a {
          color: #fff;
          border-bottom: 2px dotted rgba(255,255,255,0);
          padding-bottom: 3px;
          transition: border-bottom .1s ease;
      }
      span.subheadline a:hover {
          border-bottom: 3px dotted rgba(255,255,255,.5);
      }
      @media screen and (max-width: 1024px){
          .lp-main-message-wrap > .row {
              height: 350px;
          }
          span.headline {
              font-size: 38px;
              line-height: 42px;
          }
          span.subheadline {
              font-size: 25px;
              line-height: 32px;
              display: inline-block;
              padding: 20px 10px;   
          }
      }
        </style>
    <div class="lp-main-message-wrap">
    <div class="row">
    <div class="columns large-7 lp-main-text">
    <span class="headline">From Basement to Beautiful</span>
    <span class="subheadline">$500 Off a Dry, Healthy Basement*</span>
    </div>
    </div>
    </div>`
  });

  toAdd('link-block') && bm.add('link-block', {
    category: 'Basic',
    label: 'Link Block',
    attributes: { class: 'fa fa-link' },
    content: {
      type:'link',
      editable: false,
      droppable: true,
      style:{
        display: 'inline-block',
        padding: '5px',
        'min-height': '50px',
        'min-width': '50px'
      }
    },
  });

  toAdd('quote') && bm.add('quote', {
    label: 'Quote',
    category: 'Basic',
    attributes: { class: 'fa fa-quote-right' },
    content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
  });

  toAdd('text-basic') && bm.add('text-basic', {
    category: 'Basic',
    label: 'Text section',
    attributes: { class: 'gjs-fonts gjs-f-h1p' },
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
  });
}
