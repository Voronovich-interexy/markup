interface IDeveloperProps {
  name: string;
  qualification: string;
}

class Junior {
  information: IDeveloperProps;

  constructor(private props: IDeveloperProps) {
    this.information = props;
  }
}

class Middle {
  information: IDeveloperProps;

  constructor(private props: IDeveloperProps) {
    this.information = props;
  }
}

class Senior {
  information: IDeveloperProps;

  constructor(private props: IDeveloperProps) {
    this.information = props;
  }
}

export class DeveloperFactory {
  create(data: IDeveloperProps) {
    let developer: any;
    switch (data.qualification) {
      case 'junior':
        developer = new Junior(data);
        break;
      case 'middle':
        developer = new Middle(data);
        break;
      case 'senior':
        developer = new Senior(data);
        break;
    }
    return developer;
  }
}
