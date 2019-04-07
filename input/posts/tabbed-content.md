---
Title: Tabbed Content
Published: 4/6/2099
Tags: [General]
author: Johan Vergeer
---

MyFoo

^"tabbed-content-html.html"

# This page should contain tabbed content

# DocFx Nav

## Group 1

<div class="tabGroup" id="tabgroup_CeZOj-G++Q" data-bi-name="tab-group">
    <ul role="tablist">
        <li role="presentation">
          <a href="#tabpanel_CeZOj-G++Q_tabid-1" role="tab" aria-controls="tabpanel_CeZOj-G++Q_tabid-1" data-tab="tabid-1" tabindex="0" aria-selected="true" data-bi-name="tab">Tab Text 1</a>
        </li>
        <li role="presentation">
            <a href="#tabpanel_CeZOj-G++Q_tabid-2" role="tab" aria-controls="tabpanel_CeZOj-G++Q_tabid-2" data-tab="tabid-2" tabindex="-1" data-bi-name="tab" aria-selected="false">Tab Text 2</a>
        </li>
    </ul>
    <section id="tabpanel_CeZOj-G++Q_tabid-1" role="tabpanel" data-tab="tabid-1">
        <p>Tab content-1-1.</p>
    </section>
    <section id="tabpanel_CeZOj-G++Q_tabid-2" role="tabpanel" data-tab="tabid-2" hidden="hidden" aria-hidden="true">
        <p>Tab content-2-1.</p>
    </section>
</div>

# Group 2

<div class="tabGroup" id="tabgroup_CeZOj-G++Q-2" data-bi-name="tab-group">
    <ul role="tablist">
        <li role="presentation">
            <a href="#tabpanel_CeZOj-G++Q-2_tabid-1" role="tab" aria-controls="tabpanel_CeZOj-G++Q-2_tabid-1" data-tab="tabid-1" tabindex="0" aria-selected="true" data-bi-name="tab">Tab Text 1</a>
        </li>
        <li role="presentation">
            <a href="#tabpanel_CeZOj-G++Q-2_tabid-2" role="tab" aria-controls="tabpanel_CeZOj-G++Q-2_tabid-2" data-tab="tabid-2" tabindex="-1" data-bi-name="tab" aria-selected="false">Tab Text 2</a>
        </li>
    </ul>
    <section id="tabpanel_CeZOj-G++Q-2_tabid-1" role="tabpanel" data-tab="tabid-1">
        <p>Tab content-1-1.</p>
    </section>
    <section id="tabpanel_CeZOj-G++Q-2_tabid-2" role="tabpanel" data-tab="tabid-2" hidden="hidden" aria-hidden="true">
        <p>Tab content-2-1.</p>
    </section>
</div>

# Material Kit nav

## Group 1

<div class="card card-nav-tabs card-plain">
    <div class="card-header card-header-danger">
        <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
        <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
                <ul class="nav nav-tabs" data-tabs="tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home" data-toggle="tab"  data-tab="tabid-1">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#updates" data-toggle="tab" data-tab="tabid-2">Updates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#history" data-toggle="tab" data-tab="tabid-3">History</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        <div class="card-body ">
        <div class="tab-content text-center">
            <div class="tab-pane active" id="home"  data-tab="tabid-1">
                <p>I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#x2019;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
            </div>
            <div class="tab-pane" id="updates"  data-tab="tabid-2">
                <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
            </div>
            <div class="tab-pane" id="history"  data-tab="tabid-3">
                <p> I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
            </div>
        </div>
    </div>
  </div>

## Group 2

  <div class="card card-nav-tabs card-plain">
    <div class="card-header card-header-danger">
        <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
        <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
                <ul class="nav nav-tabs" data-tabs="tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home-2" data-toggle="tab"  data-tab="tabid-1">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#updates-2" data-toggle="tab"  data-tab="tabid-2">Updates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#history-2" data-toggle="tab"  data-tab="tabid-3">History</a>
                    </li>
                </ul>
            </div>
        </div>
    </div><div class="card-body ">
        <div class="tab-content text-center">
            <div class="tab-pane active" id="home-2"  data-tab="tabid-1">
                <p>I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#x2019;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
            </div>
            <div class="tab-pane" id="updates-2" data-tab="tabid-2">
                <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
            </div>
            <div class="tab-pane" id="history-2" data-tab="tabid-3">
                <p> I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
            </div>
        </div>
    </div>
  </div>