// Store data
const jsonScenarioData = {
  "modes": [
    {
      "modeName": "Start a Conversation",
      "levels": [
        {
          "levelName": "Start-Conversation-Close-Friend",
          "badge": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/end-phase/level1-badge.png",
          "badge_title": "Start a Conversation Level 1",
          "enviroment-music": "",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Casual hello",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Hi, it’s nice to see you",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Hello, how have you been?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-1/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Asking About Their Day",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "How’s your day been",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-2/option2-consequence.png",
                    "consequence_text": "Friend felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Sharing your news",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I started a new hobby",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "I just finished painting. What about you",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-3/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Listening carefully",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "What did you do this weekend",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Look away and don't listen",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-4/option2-consequence.png",
                    "consequence_text": "Friend stopped talking"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Ending the chat",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "It was great talking to you!",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Look at your phone",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/easy/phase-5/option2-consequence.png",
                    "consequence_text": "Friend walked away"
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Start-Conversation-MINDS-Staff",
          "badge": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/end-phase/level2-badge.png",
          "badge_title": "Start a Conversation Level 2",
          "enviroment-music": "",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Polite greeting",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Hi, How are you doing",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Hello, How are you today?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-1/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Asking About Their Day",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "How’s your day been",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-2/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Sharing Your Activity",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I baked cookies!",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "I did some painting",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-3/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Asking About the Plan",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "What activities are planned for me today",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Look away and say nothing",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-4/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Offering Help",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Can I help with anything?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/option1.webp",
                  "consequence": null
                },
                {
                  "optionText": "Be quiet and don’t reply",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-5/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt you weren't listening"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Ending the chat",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thanks for chatting! See you later!",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Look at your phone",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/medium/phase-6/option2-consequence.png",
                    "consequence_text": "MINDS staff walked away"
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Start-Conversation-New-Person",
          "badge": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/end-phase/level3-badge.png",
          "badge_title": "Start a Conversation Level 3",
          "enviroment-music": "",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Introducing Yourself",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I’m [Your Name]. What’s your name?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Nice to meet you! I’m [Your Name]",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-1/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Asking About Their Day",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "How’s your day been?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-2/option2-consequence.png",
                    "consequence_text": "New person felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Sharing Something About Yourself",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I love doing art!",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "I enjoy baking!",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-3/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Asking About Interests",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "What do you like doing?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Be quiet and don’t reply",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-4/option2-consequence.png",
                    "consequence_text": "New person felt you weren't listening"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Asking About Weekend Activities",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "What did you do last weekend?",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Look away and say nothingy",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-5/option2-consequence.png",
                    "consequence_text": "New person felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Ending the chat",
              "phaseImage": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thanks for chatting! See you later!",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Look at your phone",
                  "image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/start-a-convo/hard/phase-6/option2-consequence.png",
                    "consequence_text": "New person walked away"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "modeName": "Handle Feedback",
      "levels": [
        {
          "levelName": "Handle-Feedback-Close-Friend",
          "badge": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/end-phase/level1-badge.png",
          "badge_title": "Handle Feedback Level 1",
          "enviroment-music": "",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Receiving feedback positively",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thank you for sharing",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/option1.webp",
                  "consequence": null
                },
                {
                  "optionText": "I value your feedback",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-1/option2.webp",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Clarifying the feedback",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Can you explain more?",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-2/option2-consequence.png",
                    "consequence_text": "Friend felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Acknowledging the Feedback",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I see what you mean",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "That makes sense",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-3/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Responding to the Feedback",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "How can I improve?",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/option1.webp",
                  "consequence": null
                },
                {
                  "optionText": "React angrily",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/option2.webp",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-4/option2-consequence.png",
                    "consequence_text": "Friend got angry too"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Responding positively",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I will work on it",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Walk away",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/easy/phase-5/option2-consequence.png",
                    "consequence_text": "Left a bad impression."
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Handle-Feedback-MINDS-Staff",
          "badge": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/end-phase/level2-badge.png",
          "badge_title": "Handle Feedback Level 2",
          "enviroment-music": "",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Getting feedback on art",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thanks for your tips!",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/option1.webp",
                  "consequence": null
                },
                {
                  "optionText": "I like your advice on my painting",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-1/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Noticing Mistakes",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I see where I went wrong",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Keep painting without listening",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-2/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Asking for art advice",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "How can I improve this part?",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Ignore their advice",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-3/option2-consequence.png",
                    "consequence_text": "MINDS Staff felt unimportant"
                  }
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Clarifying art changes",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Which color should I change",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "React angrily",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/option2.webp",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-4/option2-consequence.png",
                    "consequence_text": "MINDS Staff got angry too"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Fixing your artwork",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I’ll adjust my colors now",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Walk away without changing",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-5/option2-consequence.png",
                    "consequence_text": "That was disrespectful"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Thanking for art advice",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thanks for your help",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Just nod and leave",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/medium/phase-6/option2-consequence.webp",
                    "consequence_text": "MINDS staff felt unappreciated"
                  }
                }
              ]
            }
          ]
        },
        {
          "levelName": "Handle-Feedback-Workplace",
          "badge": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/end-phase/level3-badge.png",
          "badge_title": "Handle Feedback Level 3",
          "enviroment-music": "",
          "phases": [
            {
              "phaseNumber": 1,
              "phaseTitle": "Receiving feedback positively",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thanks for telling me",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/option1.webp",
                  "consequence": null
                },
                {
                  "optionText": "I appreciate the feedback",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-1/option2.png",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 2,
              "phaseTitle": "Clarifying what needs to be improved",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Can you explain more?",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Nod and look away",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-2/option2-consequence.png",
                    "consequence_text": "Supervisor felt ignored"
                  }
                }
              ]
            },
            {
              "phaseNumber": 3,
              "phaseTitle": "Explaining your view",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I find this part hard because...",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "I’m struggling with this task because",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-3/option2.webp",
                  "consequence": null
                }
              ]
            },
            {
              "phaseNumber": 4,
              "phaseTitle": "Asking how to improve",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "How can I work better?",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/option1.webp",
                  "consequence": null
                },
                {
                  "optionText": "React angrily",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/option2.webp",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-4/option2-consequence.png",
                    "consequence_text": "Supervisor feels frustrated too"
                  }
                }
              ]
            },
            {
              "phaseNumber": 5,
              "phaseTitle": "Making changes to improve",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "I’ll improve on it progressively",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Don’t improve anything",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-5/option2-consequence.png",
                    "consequence_text": "Supervisor feels disrespected"
                  }
                }
              ]
            },
            {
              "phaseNumber": 6,
              "phaseTitle": "Expressing thanks for the feedback",
              "phaseImage": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/top-image.png",
              "text-to-speech":"",
              "options": [
                {
                  "optionText": "Thanks for your help",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/option1.png",
                  "consequence": null
                },
                {
                  "optionText": "Just walk away",
                  "image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/option2.png",
                  "consequence": {
                    "consequence_image": "../../images/different-scenarios/specific-scenario/handle-feedback/hard/phase-6/option2-consequence.webp",
                    "consequence_text": "Supervisor felt unappreciated"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// Lood content
  document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.scenario-option');

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            const levelName = option.getAttribute('data-level');

            console.log('Clicked levelName:', levelName);

            // Find the level data in the JSON structure
            let levelData = null;

            jsonScenarioData.modes.forEach(mode => {
                mode.levels.forEach(level => {
                    if (level.levelName === levelName) {
                        levelData = level;
                    }
                });
            });

            // Check if the level data was found
            if (levelData) {
                console.log('Selected level data:', levelData);
                // Store the data for the selected level in session storage
                localStorage.setItem('selectedLevelData', JSON.stringify(levelData));
                // Redirect to the new page
                window.location.href = '../specific-scenario/specific-scenario.html';
            } else {
                console.error('Level not found in the data');
            }
        });
    });
  });
