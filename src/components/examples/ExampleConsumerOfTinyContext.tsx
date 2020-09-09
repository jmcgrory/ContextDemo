import React from 'react';
import { TinyModeContext } from '../../context';

const ExampleConsumerOfTinyContext = () => {
    return (
        <section id="TinyMode">
            <h2>TinyMode Example In Action</h2>
            <p>The following text may or may not be tiny!</p>
            <TinyModeContext.Consumer>
                {(isTiny) => (
                    <q style={{ fontSize: isTiny ? '0.1em' : '1em' }}>
                        Lorem ipsum dolor sit amet, ad natum dicunt pro, te nec alii accumsan honestatis. Eam tibique percipit mandamus ut, id pri facer primis, id epicurei perpetua ius. Pri id nusquam mediocritatem, has eu ipsum adolescens comprehensam, tamquam detracto ei sit. Cu mazim iudicabit has. Verear sensibus reformidans mei no.

                        Cul magna patrioque neglegentur id. Vis ad recusabo definitiones, et libris nominati vix, quis quod mel id. Movet verear erroribus eu eum, sea ad definitionem signiferumque. At mel doming omittam. Dolor feugait propriae est at, an verear fabellas mediocritatem has.

                        An iuvaret ponderum quo, labitur pericula ut his. At nec postea conceptam intellegebat, quo posse alterum ea, etiam nusquam urbanitas cu eam. Eu soleat discere has, ea alia antiopam est, ne usu alii dicam gubergren. Integre voluptaria cu eam, ferri utamur dissentiet vel an, ne est alii vide bonorum. Homero scriptorem in vix, ne quas erant pri.

                        Sea ne alii paulo atomorum, in sed delenit volumus albucius, ceteros euripidis ne per. Has id aliquip detracto detraxit. Eu omnium vocent molestie eos. Graeci oblique pri eu, volutpat laboramus cum te, pro ut lobortis delicatissimi. Mel esse nostrum intellegat cu, fabulas ancillae mei ea.
                    </q>
                )}
            </TinyModeContext.Consumer>
            <p>What an amazing UX.</p>
        </section>
    );
}

export default ExampleConsumerOfTinyContext;
