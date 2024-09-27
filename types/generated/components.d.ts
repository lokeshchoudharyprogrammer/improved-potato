import type { Struct, Schema } from '@strapi/strapi';

export interface RcaPartB extends Struct.ComponentSchema {
  collectionName: 'components_rca_part_bs';
  info: {
    displayName: 'Part B';
    description: '';
  };
  attributes: {
    Instruction: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Read, comprehend the passage and choose the right answer for the following questions'>;
    passage: Schema.Attribute.RichText & Schema.Attribute.Required;
    mcq: Schema.Attribute.Component<'block.mcq-question', true>;
  };
}

export interface RcaPartA extends Struct.ComponentSchema {
  collectionName: 'components_rca_part_as';
  info: {
    displayName: 'Part A';
    description: '';
  };
  attributes: {
    Instruction: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read and record the passage'>;
    passage: Schema.Attribute.RichText & Schema.Attribute.Required;
    model_reading: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface QbComponentsMtfColAOption extends Struct.ComponentSchema {
  collectionName: 'components_qb_components_mtf_col_a_options';
  info: {
    displayName: 'mtf_colA_option';
    description: '';
  };
  attributes: {
    left_option: Schema.Attribute.String;
    right_option: Schema.Attribute.Component<'block.option', true>;
  };
}

export interface BlockSubjective extends Struct.ComponentSchema {
  collectionName: 'components_block_subjectives';
  info: {
    displayName: 'Subjective';
  };
  attributes: {
    Question_Type: Schema.Attribute.Enumeration<['VSA', 'SA', 'LA']> &
      Schema.Attribute.Required;
    Question: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlockOption extends Struct.ComponentSchema {
  collectionName: 'components_block_options';
  info: {
    displayName: 'Option';
    description: '';
  };
  attributes: {
    option_text: Schema.Attribute.String & Schema.Attribute.Required;
    isAnswer: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    media_option: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface BlockMtf extends Struct.ComponentSchema {
  collectionName: 'components_block_mtfs';
  info: {
    displayName: 'MTF';
  };
  attributes: {
    options: Schema.Attribute.Component<'qb-components.mtf-col-a-option', true>;
  };
}

export interface BlockMediaInput extends Struct.ComponentSchema {
  collectionName: 'components_block_media_inputs';
  info: {
    displayName: 'media_input';
    icon: 'picture';
    description: '';
  };
  attributes: {
    media_file: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.String;
  };
}

export interface BlockMcqQuestion extends Struct.ComponentSchema {
  collectionName: 'components_block_mcq_questions';
  info: {
    displayName: 'MCQ';
    description: '';
  };
  attributes: {
    mcq_question_text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    option1: Schema.Attribute.Component<'block.option', false> &
      Schema.Attribute.Required;
    option2: Schema.Attribute.Component<'block.option', false> &
      Schema.Attribute.Required;
    option3: Schema.Attribute.Component<'block.option', false> &
      Schema.Attribute.Required;
    option4: Schema.Attribute.Component<'block.option', false> &
      Schema.Attribute.Required;
    KPI_Tag: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockFib extends Struct.ComponentSchema {
  collectionName: 'components_block_fibs';
  info: {
    displayName: 'FIB';
  };
  attributes: {
    Question: Schema.Attribute.RichText & Schema.Attribute.Required;
    Answer: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlockAudioQuestion extends Struct.ComponentSchema {
  collectionName: 'components_block_audio_questions';
  info: {
    displayName: 'Audio_Question';
  };
  attributes: {
    audio_question: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'rca.part-b': RcaPartB;
      'rca.part-a': RcaPartA;
      'qb-components.mtf-col-a-option': QbComponentsMtfColAOption;
      'block.subjective': BlockSubjective;
      'block.option': BlockOption;
      'block.mtf': BlockMtf;
      'block.media-input': BlockMediaInput;
      'block.mcq-question': BlockMcqQuestion;
      'block.fib': BlockFib;
      'block.audio-question': BlockAudioQuestion;
    }
  }
}
