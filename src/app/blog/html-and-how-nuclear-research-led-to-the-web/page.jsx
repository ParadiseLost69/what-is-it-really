import Image from "next/image";
import Prism from "prismjs";

export const metadata = {
  title: "Blog | What is it Really?",
  description:
    "What is it Really? is a podcast dedicated to understanding the technology that shapes our lives.",
};
export default function BlogPost() {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <Image alt="HTML" height={1920} width={1080} src="/img/HTML.webp" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl">
          HTML and how Nuclear Research Led to the Web
        </h1>
        <p className="text-lg  text-gray-400">January 29, 2024</p>
      </div>
      <div>
        <p className="text-xl my-4">
          HTML is one of the fundamental building blocks of the modern web as we
          know it today. But what is HTML really?
        </p>

        <p className="text-xl my-4">
          We&rsquo;re going to dive into the history of Markup Languages and the
          web and try to get a real understanding of something that seems so
          simple, yet powers so much of the world. Nearly every website on the
          web uses HTML to display everything from your simple recipe website to
          banking apps. Many people love the simplicity of HTML and modern web
          development libraries and frameworks such as React, Svelte, and HTMX
          put it at the forefront of their design. Is it a programming language?
          How was it created? What is it really?
        </p>

        <p className="text-xl my-4">
          If you have ever asked any of these questions then this is the podcast
          for you. Let&rsquo;s get started.
        </p>

        <p className="text-xl my-4">To begin let&rsquo;s breakdown the name:</p>

        <p className="text-xl my-4">Hypertext Markup Language.</p>

        <p className="text-xl my-4">Let&rsquo;s start at the beginning.</p>

        <p className="text-3xl font-bold underline my-4">Hypertext</p>

        <p className="text-xl my-4">What is the hypertext?</p>

        <p className="text-xl my-4">
          Hypertext is just the idea that a document can be linked to other
          documents through &ldquo;hyperlinks&rdquo;.
        </p>

        <p className="text-xl my-4">
          Lets take the example of a book about dogs. In traditional print, if
          you were reading a book about dogs you would read it from front to
          back. Often times you may come across a word that is unfamiliar or
          requires further explanation. In these cases, there is a glossary at
          the back of the book that will explain the term. Let&rsquo;s say you
          come across the word Daschsund but you don&rsquo;t know what it is.
          The book may direct you to the glossary where it informs you that a
          dachshund is also known as a wiener dog and may even display a
          picture.
        </p>

        <p className="text-xl my-4">
          Using &ldquo;Hypertext&rdquo; we can take this idea one step further.
          No longer are you limited by the physical space of a book. So, in
          theory, if you come across the unfamiliar term &ldquo;Dachshund&rdquo;
          in a &ldquo;Hypertext&rdquo; document. You can use a
          &ldquo;hyperlink&rdquo; to take you to a whole different document that
          contains everything you could possibly want to know about dachshunds.
        </p>

        <p className="text-xl my-4">
          So hypertext can link to other hypertext documents, creating an
          amazing way to share information easily.
        </p>

        <p className="text-xl my-4">Now, What is markup?</p>

        <p className="text-3xl font-bold underline my-4"> Markup</p>

        <p className="text-xl my-4">
          {" "}
          Markup is essentially a term used in print editing. The author would
          write the document and then an editor would &ldquo;Mark Up&rdquo; the
          text for the printer so that the printer would know how the document
          should be formatted.
        </p>

        <Image
          width={400}
          height={400}
          alt="Markup for the Toronto Star"
          src="/img/html/markup-print.jpeg"
        />
        <p className="text-gray-400">Markup for a Toronto Star article</p>
        <p className="text-xl my-4">
          For example, to indicate whether a section of a sentence would be in
          italics, they would write &ldquo;I-T-A-L&rdquo; on the page above the
          specified section. They could denote whether something should be
          bolded or whether it should be surround by quotation marks.
        </p>

        <p className="text-xl my-4">
          On a fundamental level, this is what the &ldquo;Markup&rdquo; in
          Hypertext Markup Language is. Electronic Markup telling the computer
          what to display. In the case of HTML it is actually better defined as
          a descriptive markup language: something that labels the document
          parts semantically as opposed to how aspects of the page should be
          processed.
        </p>

        <p className="text-xl my-4">
          {" "}
          So a markup language labels the parts of a document.
        </p>

        <p className="text-3xl underline font-bold">
          History of Markup Languages
        </p>

        <Image
          className="mt-4"
          width={300}
          height={300}
          src={"/img/html/c-goldfarb.jpeg"}
          alt="Charles Goldfarb with an XML handbook"
        ></Image>
        <p className="text-gray-400">
          Charles Goldfarb (one of the creators of GML) poses with the XML
          handbook
        </p>
        <p className="text-xl my-4">
          {" "}
          We now have kind of a working definition for Hypertext Markup
          Language. Something that labels the text semantically and links to
          other pages. But that isn&rsquo;t exactly all that it does. And to
          understand this, we&rsquo;re going to learn a bit about the history of
          Markup Languages. Starting all the way back in 1969 with Generalized
          Markup Language. Or GML.
        </p>

        <p className="text-xl my-4">
          GML was created, in the late 1960s and early 1970s by The father of
          markup languages Charles Goldfarb, as well as Edward Mosher and
          Raymond Lorie. They had created the language to display large
          complicated documents in a format that would be easy to read on
          computers.
        </p>

        <p className="text-xl my-4">
          While they had an idea for the goal of the language they hadn&rsquo;t
          quite thought about what they would name it. So, in an effort to lend
          a part of themselves to the language, they decided to use the initials
          of their last names (Goldfarb, Mosher, and Lorie) as an initialism:
          GML.
        </p>

        <p className="text-xl my-4">
          {" "}
          The syntax for GML is fairly similar to modern html in that you would
          open a tag and then write the content after it. Each tag (for example,
          an h2 tag) would be preceded by a colon.
        </p>
        <div className="my-8 border max-w-fit p-4 ">
          {" "}
          <code className="">
            :h1 Heading Name <br></br> :para Content
          </code>
        </div>
        <p className="text-xl my-4">
          This was incredibly useful for displaying documents but it ended up
          being difficult to standardize so,
        </p>

        <p className="text-xl my-4">
          Nearly 17 years later, in 1986, Standardized General Markup Language
          or SGML was released. SGML was built to display a variety of different
          documents on a computer but also have more standardization in terms of
          how it is written. The common syntax was as follows: you could create
          an opening tag with an opening bracket followed by a letter or word
          followed by a closing bracket. But it really depended on the DTD, or
          the Document Type Declaration. A DTD is a specification file that
          contains what is allowed within the document.
        </p>

        <Image
          className="mt-4"
          height={400}
          width={500}
          src={"/img/html/SGML.jpeg"}
          alt="Sample SGML document"
        ></Image>
        <p className="text-gray-400 ">A sample SGML document</p>
        <p className="text-xl my-4">
          A DTD defined element types&#160;that represented structures or
          desired behavior. For an SGML application, a company or government
          agency would develop an SGML DTD, declaring names and constraints for
          document elements and their attributes.
        </p>

        <p className="text-xl my-4">
          For example, would paragraph tags be allowed? Would you be able to
          leave ending tags off? Creators of the DTD could even indicate that
          they would like their tags to use something other than angle brackets.
          @ signs perhaps or really anything that was defined.
        </p>

        <p className="text-xl my-4">
          {" "}
          Some people really loved this and found it great to work with and
          others seemed to dislike many aspects of the language. Often DTDs
          would become incredibly large and difficult to work with. They would
          just build and build and developers would have to work with these
          absolutely massive DTDs that they would have to constantly reference.
        </p>

        <p className="text-xl my-4">
          In essence, it&rsquo;s adaptability made it valuable for diverse
          applications, but this flexibility often led to unwieldy DTDs, posing
          challenges for developers who had to navigate these intricate
          specifications.
        </p>

        <p className="text-3xl font-bold underline my-4">History of HTML</p>
        <Image
          className="mt-4"
          width={400}
          height={400}
          src={"/img/html/t-berners-lee.jpeg"}
          alt="Tim Berners Lee with a computer"
        ></Image>
        <p className="text-gray-400 ">Sir Tim Berners-Lee with a computer</p>

        <p className="text-xl my-4">
          {" "}
          But a few years later, in 1989, Tim Berners Lee (later Sir Tim
          Berners-Lee) was working on an idea based on Ted Nelson&rsquo;s theory
          of Hypertext. Tim had often collaborated with other researchers across
          the world while working at CERN and really wanted an easier way to
          share documents and collaborate more effectively. So he formulated an
          idea.
        </p>

        <p className="text-xl my-4">
          {" "}
          This idea was actually based on something that he had worked on in
          1980, nearly ten years earlier called ENQUIRE. ENQUIRE had something
          similar to a page called a card and each of the cards had hyperlinks
          to other cards. One of the issues was that a new card would always
          have to be linked to a previous card.
        </p>

        <p className="text-xl my-4">
          Imagine it like this. Let&rsquo;s say you are studying for a test and
          you are using flash cards to do it. All of these flash cards would be
          related so you create the first card, write down the topic,
          let&rsquo;s say &ldquo;Computers&rdquo;, and then the description. In
          the description, it mentions Apple Computers and Microsoft. So you
          create new cards for Apple Computers and Microsoft and connect them to
          the first card with string. Now when you read about computers you can
          follow the string connected to Apple Computers and read more about it.
        </p>

        <p className="text-xl my-4">
          And so on from there. But what if you wanted to make a card about the
          fruit, oranges? Using Enquire, it would have to be connected to a
          previous card. But it doesn&rsquo;t actually make sense logically to
          connect it.
        </p>

        <p className="text-xl my-4">
          This is a lot simpler than it was in reality, but I think it makes it
          easier to understand the issue.
        </p>

        <p className="text-xl my-4">
          {" "}
          Tim&rsquo;s new idea would be a little bit different. It was to be a
          &ldquo;Web&rdquo; (like a spider web) of linked hypertext documents
          across the world. No longer would pages have to be linked to a
          previously existing page.
        </p>

        <p className="text-xl my-4">
          It would also build upon some amazing innovations in technology at the
          time.
        </p>

        <p className="text-xl my-4">
          The existing Internet Protocol (or IP) that handled the way data was
          dealt with. How it was packetized, addressed, transmitted, routed, and
          received over the network. It&rsquo;s a little bit out of the scope of
          the podcast to address all of these but just know that using an IP
          address to connect with another computer would come to be extremely
          important.
        </p>

        <p className="text-xl my-4">
          It would also be built upon the Domain Name System created in the 80s.
          With DNS, users could connect to an ip address by using a human
          readable name.
        </p>

        <p className="text-xl my-4">
          Instead of typing 123.456.7.89 users could just remember a name like,
          say, google.com, and they would be connected to the correct location.
          Easy!
        </p>

        <p className="text-xl my-4">
          A server computer would host a page and others could type in the
          address to view it. But, it would need a brand new language to display
          the content.
        </p>

        <p className="text-xl my-4">
          So, as an application of SGML, Tim proposed Hypertext Markup Language.
          HTML. It was to be very easy to implement and fairly flexible. At the
          time, it contained only about 20 tags that could be used. It also had
          the ability to leave off ending tags. Something that saved space and
          potentially made it easier to write.
        </p>

        <p className="text-xl my-4">
          A developer could write an opening paragraph tag, put the text in and
          just leave the rest of the document blank and it would automatically
          be filled in later on. Something that it is still possible to do in
          HTML, although I don&rsquo;t personally recommend it for a number of
          reasons.
        </p>

        <p className="text-xl my-4">
          Tim coded all of this on a NeXt computer (the computer created by
          Steve Jobs after he was ousted from Apple) and created the first
          browser to be able to display HTML. He even set up the first Web
          Server software to host this. It was a computer with a sticky note on
          it that said &ldquo;This machine is a server. DO NOT TURN IT
          OFF!&rdquo; Written in red ink.
        </p>
        <Image
          className="mt-4"
          height={400}
          width={400}
          src={"/img/html/first-server.jpeg"}
          alt="the first server with a note that says do not turn off"
        ></Image>
        <p className="text-gray-400">
          A NeXt computer with a note that says &quot;This machine is a server.
          Do not turn off.&quot;
        </p>

        <p className="text-xl my-4">
          I guess at CERN they had people that went around at night shutting off
          all the computers that people had left on. I can&rsquo;t imagine
          walking in and shutting off a computer and becoming the guy that
          literally shut down the entire World Wide Web.
        </p>

        <p className="text-xl my-4">
          Anyways, at that moment the World Wide Web had its first server with
          its first website. And that website was about what else? The World
          Wide Web.
        </p>

        <p className="text-xl my-4">
          It was a website with a homepage that consisted of a header with
          several paragraphs of text describing the world wide web and linking
          to other locations such as definitions for hypermedia, help regarding
          the browser you are using, and technical details.
        </p>

        <p className="text-xl my-4">
          The first sentence is &ldquo;The WorldWideWeb (W3) is a wide-area
          hypermedia information retrieval initiative aiming to give universal
          access to a large universe of documents&rdquo;.
        </p>

        <p className="text-xl my-4">
          You can actually still visit this website today at{" "}
          <a
            href="https://info.cern.ch/hypertext/WWW/TheProject.html"
            target="_blank"
            className="underline text-blue-300"
          >
            info.cern.ch
          </a>{" "}
          although it is pretty much what you expect it to be. A bunch of text
          with hyperlinks to other pages. Pretty much the first thing any
          aspiring web developer creates when they learn HTML today.
        </p>

        <p className="text-xl my-4">
          {" "}
          There were actually several drafts as to what HTML would be. Some
          included features like tables and forms but there was never actually
          an official release of HTML 1.0. The first &ldquo;official&rdquo;
          version would be HTML 2.0 and it was so named so that people could
          differentiate it from the previous drafts and ideas for HTML. This was
          created in 1995 by the Internet Engineering Task Force.
        </p>

        <p className="text-xl my-4">
          Around this time, web browsers like Netscape Navigator and Internet
          Explorer were released and world wide web users could access websites
          on computers all over the world. No longer was there a single web
          server with a single website. By 1995 there were roughly twenty
          thousand websites and nearly 75000 web servers.
        </p>

        <p className="text-xl my-4">
          This was fantastic. Information could be disseminated across the world
          and anyone with access to a computer could access this information on
          the web. Additionally, other innovations were happening all over the
          web. A website called Auction House would launch that year where users
          could bid on products that they wanted to buy. It would eventually be
          renamed, to eBay. Websites like Craigslist, GameFAQs, Newgrounds,
          Yahoo search, MSN, and more would launch that year. All powered by the
          World Wide Web and HTML.
        </p>

        <p className="text-xl my-4">
          But there was a problem. If a person were writing HTML, they
          couldn&rsquo;t really be sure how it would be displayed on a browser.
          Each web browser began to implement their own features that would only
          work on those specific browsers.
        </p>

        <p className="text-xl my-4">
          What&rsquo;s more, they didn&rsquo;t even display the same content in
          the same way. The default font may be completely different, sizing for
          different headings would be completely different, even spacing could
          potentially differ based on the browser you were using. This did not
          lead to a seamless experience for users OR for developers.
        </p>

        <p className="text-xl my-4">
          For these reasons, nearly a year earlier, Tim Berners Lee had formed
          the Worldwide Web Consortium (W3c). The idea was to standardize the
          web and allow for this seamless experience across the world. They
          didn&rsquo;t (and still don&rsquo;t) technically enforce anything but
          they do provide recommendations for what should be used and how. By
          1996 they had published the first standards for CSS, allowing users to
          customize the appearance of their HTML.
        </p>

        <p className="text-xl my-4">
          Around this time, there was also a growing tension within the
          development community surrounding the standards of HTML. Some
          developers felt that it had strayed too far from its origins of SGML.
          There was no specification that users could look to as a guidebook and
          it was not strict enough. Developers would certainly develop bad
          habits leaving end tags off and the case insensitivity was just
          insufferable. It needed to be standardized and it needed to be
          stricter. At least, that was the thought of some.
        </p>

        <p className="text-xl my-4">
          So out of HTML came the the stricter specification of Extensible
          Markup Language (XML). If you are a developer today you may be
          familiar with an AJAX request or Ansynchronous Javascript and XML
          request. XML is a subset of SGML and is much stricter than HTML.
          Although it did not replace it.
        </p>

        <p className="text-xl my-4">
          Over the years attempts at creating a stricter standard for HTML would
          come and go. XHTML 1.0 would be released adding in error messages and
          stricter development. but overall it didn&rsquo;t seem to appeal to
          most people. They really enjoyed the simplicity of HTML.
        </p>

        <p className="text-xl my-4">
          So HTML 3.0 and eventually 4.0 were published and they added support
          for audio, video, CSS, and javascript. Really leading to a whole
          renaissance of web development. But it was still just an application
          of SGML.
        </p>

        <p className="text-xl my-4">
          Around 2007, however, the W3C and another organization, WHATWG, began
          drafting HTML5. It would come with an official recommendation in 2014
          but it added some great features. For one, it was no longer an
          application of SGML although it still included something that looked
          very similar to a Document Type Declaration. That little !DOCTYPE HTML
          that is added at the top of most HTML files actually triggers a
          standards compliant rendering mode. In other words, it tells the
          browser that the page is HTML5 and should be displayed according to
          the standards.
        </p>

        <p className="text-xl my-4">
          HTML5 also added a ton of new semantic features like nav, header,
          footer, and article, features for improved accessibility and more.
          Including a number of APIs that are specified and not specified.
        </p>

        <p className="text-xl my-4">
          From this point on, the history gets pretty convoluted. There are so
          many different working groups dictating what is going on and there are
          some disputes between W3C and WHATWG but it kind of concludes in W3C
          Ceding control over to WHATWG.
        </p>

        <p className="text-xl my-4">
          Basically, W3C had been trying to shift the standard towards things
          like XHTML and they were taking a really long time to make decisions
          and WHATWG didn&rsquo;t like that.
        </p>

        <p className="text-xl my-4">
          So, as of 2019 to the current date, WHATWG is in control of HTML
          standards although they work in collaboration with W3C.
        </p>

        <p className="text-xl my-4">
          So there it is. A history of HTML. This is by no means a complete
          history and we certainly glossed over a ton of content but I hope this
          helps to elaborate on the formation of HTML and why we use it.
        </p>

        <p className="text-xl my-4">
          The hypertext links to other pages and the markup labels parts of the
          document semantically. Browsers display things (for example an h1)
          slightly differently but they have come to be more and more
          standardized due to recommendations from groups like W3C and WHATWG.
        </p>

        <p className="text-xl my-4">
          Now that we know the history of HTML, what is it now? How does it
          work?
        </p>

        <p className="text-3xl underline font-bold">How HTML Works</p>

        <p className="text-xl my-4">
          HTML documents are basically trees of elements and text. You have a
          start tag and end tag and in the middle there is text.
        </p>

        <p className="text-xl my-4">This is called an element.</p>
        <p></p>
        <div className="my-4 p-4">
          <pre className="language-html">
            {" "}
            <code>&lt;p&gt; content &lt;/p&gt;</code>
          </pre>
        </div>
        <p className="text-xl my-4">
          The HTML document is made up of many elements. You can open one
          element and have many others inside.
        </p>

        <p className="text-xl my-4">
          For example if you want to start the content for your page, you would
          include it in a body element. You would use a body start tag, put all
          the other elements you need inside, and then use a body close tag to
          say that you are finished.
        </p>

        <p className="text-xl my-4">
          You can also add &ldquo;attributes&rdquo; to these elements in order
          to make them do different things. An &ldquo;a&rdquo; element for
          example can have an href attribute that tells a browser to go to a
          different page when that element is clicked.
        </p>

        <div className="my-4 p-4">
          <pre className="language-html">
            {" "}
            <code>
              &lt;a href=&quot;https://url.com&quot;&gt;
              <br />
              &lt;p&gt; content &lt;/p&gt;
              <br />
              &lt;/a&gt;
            </code>
          </pre>
        </div>
        <p className="text-xl my-4">
          Once you are finished writing the HTML you can send it off to an HTML
          user agent. An HTML user agent is any software application that
          accesses, interprets, and renders HTML documents.
        </p>

        <p className="text-xl my-4">
          This is where some people get confused. They may ask something like
          &ldquo;is HTML written in C&rdquo;? But this is not the case. It is
          purely markup. Until a user agent parses it, it doesn&rsquo;t actually
          DO anything.
        </p>

        <p className="text-xl my-4">
          In most cases this User Agent will be a web browser like Firefox or
          Google Chrome.
        </p>

        <p className="text-xl my-4">
          A web browser loads files from a server and displays them. Within the
          browser there is a browser engine. This engine figures out what to
          display based on the input.
        </p>

        <p className="text-xl my-4">
          The browser receives the HTML file in groups called packets in the
          form of bytes. Basically it receives packages of 1s and 0s that it can
          read.
        </p>

        <p className="text-xl my-4">
          It converts these into characters. For example a, b ,c or a greater
          than symbol. At this point the code is just a bunch of characters with
          no meaning.
        </p>

        <p className="text-xl my-4">
          Then these characters are converted into tokens. It recognizes
          patterns, for example, angle brackets enclosing the letter p. This is
          called the tokenization process.
        </p>

        <p className="text-xl my-4">
          These tokens are then converted into nodes. The nodes show everything
          about the content of the document. There are element nodes that tell
          everything about elements, Text nodes, and comment nodes.
        </p>

        <p className="text-xl my-4">
          You can think of them kind of like objects. They contain the
          properties of that object and everything it can do.
        </p>

        <p className="text-xl my-4">
          Once these nodes are created, the browser creates a tree structure
          called the Document Object Model Tree OR a DOM tree. It represents all
          the nodes and how they are connected to one another.
        </p>

        <p className="text-xl my-4">
          {" "}
          The browser also does this if there is a linked CSS file. It creates
          this same tree but it is called the CSSOM. Doesn&rsquo;t quite flow
          off the tongue as well though.
        </p>

        <p className="text-xl my-4">
          These are combined to create the render tree.
        </p>

        <p className="text-xl my-4">
          After this, the mathematical formulae for where things will be
          displayed on the page is run. Basically they determine the location of
          items on the page. This is called reflow.
        </p>

        <p className="text-xl my-4">
          Next everything is &ldquo;painted&rdquo;. All the information is
          gather so now all the elements can be displayed on the page.
        </p>

        <p className="text-xl my-4">
          So basically, the render tree must be constructed first and then
          everything can be painted to the web page.
        </p>

        <p className="text-xl my-4">But what about JavaScript?</p>

        <p className="text-xl my-4">
          Well, when the HTML file is being parsed, if the browser sees a
          &ldquo;script&rdquo; tag it will actually stop all of the DOM tree
          from being constructed. It will pause everything and run the script.
        </p>

        <p className="text-xl my-4">
          So if you have ever placed your JS file at the top of an HTML document
          and you got a bunch of errors, now you know why. EXPLAIN WHY This is
          why we use a defer or async attribute or place the script tag below
          our HTML.
        </p>

        <p className="text-xl my-4">
          Another issue comes when the script is getting something from the
          internet. Let&rsquo;s say you are in Toronto Canada and you want to
          fetch something in Tokyo. If you have this placed at the top of your
          document, you will have to wait for that file to be fetched completely
          before the DOM is even created.
        </p>

        <p className="text-xl my-4">
          Users could sit there looking at a blank page for a minute before
          anything would even be begin rendering.
        </p>

        <p className="text-xl my-4">That is a high level overview of HTML.</p>

        <p className="text-3xl my-4 font-bold underline">The Future of HTML</p>

        <p className="text-xl my-4">
          {" "}
          So what is the current state of HTML and what does the future hold?
        </p>

        <p className="text-xl my-4">
          At the moment there are some cool new features being implemented and
          others being worked on.
        </p>

        <p className="text-xl my-4">
          The dialog element, for example, is a newer feature that allows for an
          easier interface with modals directly in HTML and JavaScript and it
          already has widespread browser support.
        </p>

        <p className="text-xl my-4">
          Support for APIs like the geolocation API and Drag and Drop has really
          changed the face of web development as a whole. Allowing for some
          really interesting and seamless user experiences.
        </p>

        <p className="text-xl my-4">
          There looks to be a very strong push towards accessibility too.
        </p>

        <p className="text-xl my-4">
          However, the future of web development as a whole is clearly not just
          focused on HTML. It&rsquo;s a combination of HTML, CSS and JavaScript
          that drive the web.
        </p>

        <p className="text-xl my-4">
          Historically, HTML has tried to separate itself from the other aspects
          of web development. While there are still many default stylings for
          different elements it has become more and more common to use ui
          libraries or CSS resets to completely do away with those default
          styles.
        </p>

        <p className="text-xl my-4">
          Even older html elements that concerned themselves with styling have
          been deprecated. And the elements that do technically still add
          styling (like strong and em for bolding and italics respectively)
          generally have a semantic use case or are useful for assistive
          technologies like Screen Readers.
        </p>

        <p className="text-xl my-4">
          Many developers hold this idea of the separation of concerns in HTML,
          CSS, and JavaScript as a guiding principle of web development. The
          golden rule.
        </p>

        <p className="text-xl my-4">
          {" "}
          HTML does the structure. CSS does the styling. Javascript does the
          logic.
        </p>

        <p className="text-xl my-4">
          But in recent years there has been considerable overlap.
        </p>

        <p className="text-xl my-4">
          Many applications are no longer developed using strictly HTML, CSS,
          and vanilla Javascript.
        </p>

        <p className="text-xl my-4">
          {" "}
          There are frameworks and libraries built on top of these technologies
          that really speed development time up.
        </p>

        <p className="text-xl my-4">
          React, for example, provides a great developer experience by seemingly
          placing the Javascript and HTML in the same file using something
          called JSX.
        </p>

        <p className="text-xl my-4">
          Frameworks like tailwind CSS allow users to write css as classes
          directly in the HTML file. It actually looks very similar to inlined
          CSS but it is fairly different.
        </p>

        <p className="text-xl my-4">
          Other technologies, like HTMX, seek to create a different developer
          experience still by adding much of the logic normally created in
          Javascript directly to HTML attributes themselves.
        </p>

        <p className="text-xl my-4">So where are the concerns separated?</p>

        <p className="text-xl my-4">Is it the frontend from the backend?</p>

        <p className="text-xl my-4">
          Or are things more modular? Should we keep all of the logic, styling,
          and semantics in a singular component, and then separate those
          components?
        </p>

        <p className="text-xl my-4">
          Now before I get a crowd of angry people yelling at me and telling me
          I&rsquo;m incorrectly defining these technologies, I know I am. There
          is a lot more to all of these technologies.
        </p>

        <p className="text-xl my-4">
          But that&rsquo;s why it is so tricky to figure out where HTML will go
          from here. Web development is no longer just placing HTML files on a
          server and hosting a static website. We've added CSS and JavaScript .
          We added jQuery to everything and then stopped using it. We have
          frameworks and libraries that change the development experience so
          much that new web developers are often starting with the frameworks
          and then working backwards to understand the technology underneath.
        </p>

        <p className="text-xl my-4">
          But at the end of the day, the browser is still reading that HTML. And
          that is really where it all started.
        </p>
      </div>
    </div>
  );
}
