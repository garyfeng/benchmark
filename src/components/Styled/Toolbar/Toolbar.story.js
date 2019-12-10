import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global.js';
import ThemeProvider from '../ThemeProvider.js';
import { Box } from '../Base';
import Toolbar from './Toolbar';

storiesOf('Styled System', module).add('Toolbar', () => {
  const [helpActive, setHelpActive] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [ttsActive, setTTSActive] = useState(false);
  const [scratchActive, setSratchActive] = useState(false);
  const [calcActive, setCalcActive] = useState(false);
  const [language, setLanguage] = useState('en');
  const progress = 50;
  const itemTitle = 'VH12345';
  const blockTitle = 'Block Title';

  return (
    <Global>
      <ThemeProvider>
        <Box
          width="100%"
          sx={{
            position: 'absolute'
          }}
        >
          <Toolbar
            // data
            progress={progress}
            language={language}
            itemTitle={itemTitle}
            blockTitle={blockTitle}
            // toggle button states
            isHelpActive={helpActive}
            isTTSActive={ttsActive}
            isTimerActive={timerActive}
            isScratchActive={scratchActive}
            isCalcActive={calcActive}
            // event handlers
            onClickHelp={() => setHelpActive(!helpActive)}
            onClickTTS={() => setTTSActive(!ttsActive)}
            onClickScratch={() => setSratchActive(!scratchActive)}
            onClickCalc={() => setCalcActive(!calcActive)}
            onClickTimer={() => setTimerActive(!timerActive)}
            onClickLang={() => setLanguage(language === 'en' ? 'es' : 'en')}
          />
        </Box>
      </ThemeProvider>
    </Global>
  );
});
